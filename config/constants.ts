const CONSTANTS = {
  IEX_CLOUD: {
    BASE_URL: 'https://cloud.iexapis.com/stable',
    TOKEN: process.env.IEX_CLOUD_API_KEY,
  },
  API: {
    SEARCH: '/api/search',
  },
};

export const { IEX_CLOUD, API } = CONSTANTS;
export default CONSTANTS;
