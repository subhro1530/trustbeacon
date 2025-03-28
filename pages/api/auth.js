export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Handle login
      // 1. Validate user
      // 2. Generate JWT
      // 3. Return user data + token
      return res.status(200).json({ token: 'FAKE_JWT_TOKEN' });
    }
    return res.status(405).json({ error: 'Method not allowed' });
  }
  