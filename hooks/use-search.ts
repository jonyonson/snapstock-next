import fetch from '../lib/fetch';
import useSWR from 'swr';

// Constants
import { API } from '../config/constants';

const HOUR = 1000 * 60 * 60;

function useSearch(value: string) {
  const url = `${API.SEARCH}/${value}`;
  const { data, error } = useSWR<Suggestion[]>(value ? url : null, fetch, {
    dedupingInterval: HOUR,
  });

  return {
    suggestions: data,
    error,
    loading: !error && !data,
  };
}

export default useSearch;
