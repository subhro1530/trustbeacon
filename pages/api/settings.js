// pages/api/settings.js
import { getThreshold, setThreshold } from '../../lib/dataStore';

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ threshold: getThreshold() });
  }
  if (req.method === 'POST') {
    const { threshold } = req.body;
    setThreshold(Number(threshold));
    return res.status(200).json({ message: 'Threshold updated' });
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
