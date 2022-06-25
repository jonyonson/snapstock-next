import { useEffect, useState } from 'react';
import { API } from '../config/constants';

const cache: { [key: string]: Quote } = {};

function fetchSuggestions(value: string) {
  if (cache[value]) {
    return Promise.resolve(cache[value]);
  }

  return fetch(`${API.SEARCH}/${value}`)
    .then((res) => res.json())
    .then((result) => {
      cache[value] = result;
      return result;
    });
}

export default function useSearch(searchTerm: string): Quote[] {
  const [suggestions, setSuggestions] = useState([]);

  // @ts-ignore
  useEffect(() => {
    if (searchTerm.trim() !== '') {
      let isFresh = true;
      fetchSuggestions(searchTerm).then((results) => {
        if (isFresh) {
          setSuggestions(results);
        }
      });
      return () => (isFresh = false);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  return suggestions;
}
