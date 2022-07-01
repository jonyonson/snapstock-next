import type { NextApiRequest, NextApiResponse } from 'next';
import { EXTERNAL_API } from 'config/constants';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const { HEROKU_NODE, VERCEL_PYTHON } = EXTERNAL_API.MARKET_INDICES;

  try {
    const response = await fetch(HEROKU_NODE);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error getting data' });
  }
}
