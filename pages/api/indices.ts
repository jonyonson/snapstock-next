import type { NextApiRequest, NextApiResponse } from 'next';
import { FLASK_APP } from 'config/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { BASE_URL, INDICES } = FLASK_APP;
  const url = `${BASE_URL}/${INDICES}`;
  console.log(url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error getting data' });
  }
}
