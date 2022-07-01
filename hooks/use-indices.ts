import fetch from '../lib/fetch';
import useSWR from 'swr';

interface Index {
  yearRange: string;
  avgVolume: number;
  change: number;
  dayRange: string;
  open: number;
  percentChange: number;
  previousClose: number;
  price: number;
  volume: number;
}

type Indices = {
  dow: Index;
  nasdaq: Index;
  sp500: Index;
};

function useIndices(refreshInterval = 10000) {
  const { data, error } = useSWR<Indices>('/api/indices', fetch, {
    refreshInterval,
  });

  return {
    dow: data?.dow,
    sp500: data?.sp500,
    nasdaq: data?.nasdaq,
    loading: !error && !data,
    error,
  };
}

export default useIndices;
