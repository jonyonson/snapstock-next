const CONSTANTS = {
  IEX_CLOUD: {
    BASE_URL: 'https://cloud.iexapis.com/stable',
    TOKEN: process.env.IEX_CLOUD_API_KEY,
  },
};

export const { IEX_CLOUD } = CONSTANTS;
export default CONSTANTS;
