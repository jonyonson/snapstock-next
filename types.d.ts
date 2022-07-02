declare module '*module.css' {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

declare interface Suggestion {
  symbol: string;
  exchange: string;
  exchangeSuffix: string;
  name: string;
  type: string;
  region: string;
  currency: string;
  sector: string;
}
