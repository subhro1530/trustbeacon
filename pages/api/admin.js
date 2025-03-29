// pages/api/admin.js
import { getFlaggedItems, removeFlaggedItem } from '../../lib/dataStore';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const items = getFlaggedItems();
    return res.status(200).json({ results: items });
  }

  if (req.method === 'DELETE') {
    const { index } = req.query;
    removeFlaggedItem(Number(index));
    return res.status(200).json({ message: 'Item removed' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
