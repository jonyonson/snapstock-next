const CONSTANTS = {
  IEX_CLOUD: {
    BASE_URL: 'https://cloud.iexapis.com/stable',
    TOKEN: process.env.IEX_CLOUD_API_KEY,
  },
  NEWS: {
    BASE_URL:
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=',
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
};

export const { IEX_CLOUD, FLASK_APP, API, NEWS } = CONSTANTS;
export default CONSTANTS;
