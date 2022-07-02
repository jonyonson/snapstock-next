import fetch from '../lib/fetch';
import useSWR from 'swr';

// Constants
import { API } from 'config/constants';

function useQuote(symbol: string, refreshInterval = 0) {
  const url = `${API.QUOTE}/${symbol}`;
  const { data, error } = useSWR<YahooFinanceQuote>(
    symbol ? url : null,
    fetch,
    { refreshInterval },
  );

  return {
    data,
    error,
    loading: !error && !data,
  };
}

export default useQuote;
