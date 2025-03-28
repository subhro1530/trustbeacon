import {
  getThreshold,
  addFlaggedItem,
  getFlaggedItems,
} from '../../lib/dataStore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { content } = req.body;
      if (!content) {
        return res.status(400).json({ error: "Missing 'content' in request body" });
      }

      // Fetch threshold; Ensure it has a valid default
      const threshold = getThreshold() ?? 0.5;  // Default to 0.5 if null/undefined

      // 🔥 Call the Gemini API
      const geminiResponse = await fetch('https://gemini.googleapis.com/v1/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
        },
        body: JSON.stringify({ content }),
      });

      // Handle Gemini API response errors
      if (!geminiResponse.ok) {
        const errorText = await geminiResponse.text();
        console.error('Gemini API Error:', errorText);
        return res.status(geminiResponse.status).json({ error: 'Gemini API request failed', details: errorText });
      }

      const geminiData = await geminiResponse.json();
      if (!geminiData || typeof geminiData.riskLevel !== 'number') {
        return res.status(500).json({ error: 'Invalid Gemini API response format' });
      }

      const flagged = geminiData.riskLevel >= threshold;
      let result = null;

      if (flagged) {
        result = {
          text: content,
          riskLevel: geminiData.riskLevel,
          label: geminiData.label || 'Unknown',
        };

        try {
          addFlaggedItem(result);
        } catch (dbError) {
          console.error('Database Error:', dbError);
          return res.status(500).json({ error: 'Failed to store flagged item' });
        }
      }

      return res.status(200).json({ flagged, result });

    } catch (error) {
      console.error('Unexpected Error:', error);
      return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  } 

  if (req.method === 'GET') {
    try {
      const items = getFlaggedItems();
      return res.status(200).json({ results: items ?? [] });
    } catch (error) {
      console.error('Database Fetch Error:', error);
      return res.status(500).json({ error: 'Failed to retrieve flagged items' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
