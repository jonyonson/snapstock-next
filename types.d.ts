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

declare interface IEXCloudQuote {
  avgTotalVolume: number;
  calculationPrice: string;
  change: number;
  changePercent: number;
  close: number;
  closeSource: string;
  closeTime: number;
  companyName: string;
  currency: string;
  delayedPrice: number;
  delayedPriceTime: number;
  extendedChange: number;
  extendedChangePercent: number;
  extendedPrice: number;
  extendedPriceTime: number;
  high: number;
  highSource: string;
  highTime: number;
  iexAskPrice: any;
  iexAskSize: any;
  iexBidPrice: any;
  iexBidSize: any;
  iexClose: number;
  iexCloseTime: number;
  iexLastUpdated: any;
  iexMarketPercent: any;
  iexOpen: number;
  iexOpenTime: number;
  iexRealtimePrice: any;
  iexRealtimeSize: any;
  iexVolume: any;
  lastTradeTime: number;
  latestPrice: number;
  latestSource: string;
  latestTime: string;
  latestUpdate: number;
  latestVolume: number;
  low: number;
  lowSource: string;
  lowTime: number;
  marketCap: number;
  oddLotDelayedPrice: number;
  oddLotDelayedPriceTime: number;
  open: number;
  openTime: number;
  openSource: string;
  peRatio: number;
  previousClose: number;
  previousVolume: number;
  primaryExchange: string;
  symbol: string;
  volume: number;
  week52High: number;
  week52Low: number;
  ytdChange: number;
  isUSMarketOpen: boolean;
}

declare interface Company {
  symbol: string;
  companyName: string;
  exchange: string;
  industry: string;
  website: string;
  description: string;
  CEO: string;
  securityName: string;
  issueType: string;
  sector: string;
  primarySicCode: number;
  employees: number;
  tags: string[];
  address: string;
  address2: any;
  state: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
}

declare interface Stats {
  companyName: string;
  marketcap: number;
  week52high: number;
  week52low: number;
  week52highSplitAdjustOnly: number;
  week52lowSplitAdjustOnly: number;
  week52change: number;
  sharesOutstanding: number;
  float: number;
  avg10Volume: number;
  avg30Volume: number;
  day200MovingAvg: number;
  day50MovingAvg: number;
  employees: number;
  ttmEPS: number;
  ttmDividendRate: number;
  dividendYield: number;
  nextDividendDate: string;
  exDividendDate: string;
  nextEarningsDate: string;
  peRatio: number;
  beta: number;
  maxChangePercent: number;
  year5ChangePercent: number;
  year2ChangePercent: number;
  year1ChangePercent: number;
  ytdChangePercent: number;
  month6ChangePercent: number;
  month3ChangePercent: number;
  month1ChangePercent: number;
  day30ChangePercent: number;
  day5ChangePercent: number;
}

declare interface Price {
  marketHigh: number;
  marketLow: number;
  marketAverage: number;
  marketVolume: number;
  marketNotional: number;
  marketNumberOfTrades: number;
  marketOpen: number;
  marketClose: number;
  date: string;
  high: any;
  low: any;
  average: any;
  notional: any;
  open: any;
  close: any;
  volume: any;
  numberOfTrades: any;
  minute: string;
  label: string;
  changeOverTime: any;
  marketChangeOverTime: number;
}

interface Range {
  lowEnd: number;
  highEnd: number;
}

declare interface YahooFinanceQuote {
  averageVolume: number;
  change: number;
  dayRange: Range;
  yearRange: Range;
  open: number;
  percentChange: number;
  previousClose: number;
  price: number;
  volume: number;
}
