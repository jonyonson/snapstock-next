import type { NextApiRequest, NextApiResponse } from 'next';
import { EXTERNAL_API } from 'config/constants';

const USE_FLASK_API_TO_FETCH = [
  '%5Edji', // Dow Jones Industrial Average (^dji)
  '%5Eixic', // NASDAQ (^ixic)
  '%5Egspc', // S&P 500 (^gspc)
  '%5Erut', // Russell 2000 (^rut)
  '%5Evix', // CBOE Volatility Index (^vix)
];

function getFetchUrl(symbol: string) {
  const { BASE_URL, TOKEN } = EXTERNAL_API.IEX_CLOUD;
  const encodedSymbol = encodeURI(symbol);

  if (USE_FLASK_API_TO_FETCH.includes(encodedSymbol)) {
    return `${EXTERNAL_API.FLASK_APP.QUOTE}/${encodedSymbol}`;
  }

  return `${BASE_URL}/stock/${symbol}/batch?types=quote,company,stats&token=${TOKEN}`;
}

export async function fetchQuote(symbol: string) {
  const url = getFetchUrl(symbol);
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(response.statusText);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { symbol } = req.query;

  if (!symbol || typeof symbol !== 'string') {
    res.status(404).json({ message: 'Please provide a symbol.' });
    return;
  }

  try {
    const data = await fetchQuote(symbol);
    res.status(200).json(data);
  } catch (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) message = error.message;
    res.status(500).json({ message });
  }
}
