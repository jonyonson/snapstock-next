import fetch from '../lib/fetch';
import useSWR from 'swr';

// Constants
import { API } from 'config/constants';

interface Range {
  lowEnd: number;
  highEnd: number;
}

interface Quote {
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

function useQuote(symbol: string, refreshInterval = 0) {
  const url = `${API.QUOTE}/${symbol}`;
  const { data, error } = useSWR<Quote>(url, fetch, { refreshInterval });

  return {
    data,
    error,
    loading: !error && !data,
  };
}

export default useQuote;
