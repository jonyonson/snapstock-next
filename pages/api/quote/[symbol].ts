import type { NextApiRequest, NextApiResponse } from 'next';
import { EXTERNAL_API } from 'config/constants';

const USE_FLASK_API_TO_FETCH = [
  '^dji', // Dow Jones Industrial Average
  '^ixic', // NASDAQ
  '^gspc', // S&P 500
  '^rut', // Russell 2000
  '^vix', // CBOE Volatility Index
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let { symbol } = req.query;
  symbol = encodeURI(symbol as string);

  let url;
  if (USE_FLASK_API_TO_FETCH.includes(symbol as string)) {
    url = `${EXTERNAL_API.FLASK_APP.QUOTE}/${symbol}`;
  } else {
    // This will use IEX Cloud API once that API is implemented
    url = `${EXTERNAL_API.FLASK_APP.QUOTE}/${symbol}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error getting data' });
  }
}
