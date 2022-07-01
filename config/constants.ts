const IEX_CLOUD_BASE_URL = 'https://cloud.iexapis.com/stable';
const NEWS_API_BASE_URL =
  'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=';

const CONSTANTS = {
  IEX_CLOUD: {
    BASE_URL: IEX_CLOUD_BASE_URL,
    TOKEN: process.env.IEX_CLOUD_API_KEY,
  },
  NEWS: {
    BASE_URL: NEWS_API_BASE_URL,
    API_KEY: process.env.NEWS_API_KEY,
  },
  FLASK_APP: {
    BASE_URL: process.env.FLASK_BASE_URL,
    INDICES: 'indices',
  },
  API: {
    SEARCH: '/api/search',
    INDICIES: '/api/indices',
  },
  EXTERNAL_API: {
    MARKET_INDICES: {
      HEROKU_NODE: 'https://snapstock.herokuapp.com/api/stocks/market/indices',
      VERCEL_PYTHON: 'https://snapstock-market-indices-api.vercel.app/api',
      // key names do not map correctly
      HEROKU_PYTHON: 'https://snapstock-flask.herokuapp.com/indices',
    },
    IEX_CLOUD: {
      BASE_URL: IEX_CLOUD_BASE_URL,
      TOKEN: process.env.IEX_CLOUD_API_KEY,
    },
    NEWS: {
      BASE_URL: NEWS_API_BASE_URL,
      API_KEY: process.env.NEWS_API_KEY,
    },
  },
};

export const { IEX_CLOUD, FLASK_APP, API, NEWS, EXTERNAL_API } = CONSTANTS;
export default CONSTANTS;
