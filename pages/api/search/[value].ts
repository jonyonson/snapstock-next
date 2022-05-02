import type { NextApiRequest, NextApiResponse } from 'next';
const baseUrl = 'https://cloud.iexapis.com/stable';
const token = process.env.IEX_CLOUD_API_KEY;

export default async function searchHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { value } = req.query;
  const url = `${baseUrl}/search/${value}?token=${token}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error getting data' });
  }
}
