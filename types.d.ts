declare module '*module.css' {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

declare interface Quote {
  symbol: string;
  name: string;
  exchange: string;
}
