import type { NextApiRequest, NextApiResponse } from 'next';
import { EXTERNAL_API } from 'config/constants';

const USE_FLASK_API_TO_FETCH = [
  '%5Edji', // Dow Jones Industrial Average (^dji)
  '%5Eixic', // NASDAQ (^ixic)
  '%5Egspc', // S&P 500 (^gspc)
  '%5Erut', // Russell 2000 (^rut)
  '%5Evix', // CBOE Volatility Index (^vix)
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let { symbol, types } = req.query;
  symbol = encodeURI(symbol as string);

  let url;
  if (USE_FLASK_API_TO_FETCH.includes(symbol as string)) {
    url = `${EXTERNAL_API.FLASK_APP.QUOTE}/${symbol}`;
  } else {
    const baseUrl = EXTERNAL_API.IEX_CLOUD.BASE_URL;
    const apiKey = EXTERNAL_API.IEX_CLOUD.TOKEN;
    // TODO: don't need intraday-prices until charts are implemented
    // url = `${baseUrl}/stock/${symbol}/batch?types=quote,company,intraday-prices,stats&token=${apiKey}`;
    url = `${baseUrl}/stock/${symbol}/batch?types=quote,company,stats&token=${apiKey}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error getting data' });
  }
}
