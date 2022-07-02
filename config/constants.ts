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
    QUOTE: '/api/quote',
  },
  EXTERNAL_API: {
    FLASK_APP: {
      QUOTE: 'https://snapstock-flask.herokuapp.com/api/quote',
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
