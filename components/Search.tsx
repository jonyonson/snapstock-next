import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';

// Hooks
import useSearch from '../hooks/use-search';

// Styles
import '@reach/combobox/styles.css';

type Props = {
  placeholder: string;
  className?: string;
};

function Search({ placeholder, className }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const suggestions: Quote[] = useSearch(searchTerm);
  const router = useRouter();

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleSelect = (item: string) => {
    const symbol = item.split(',')[0];
    setSearchTerm('');
    router.push(`/stocks/${symbol.toLowerCase()}`);
  };

  return (
    <Combobox
      openOnFocus
      aria-label="Search"
      className={className}
      onSelect={handleSelect}
    >
      <ComboboxInput
        onChange={handleSearchTermChange}
        placeholder={placeholder}
        value={searchTerm}
        selectOnClick
      />
      {searchTerm.length > 0 && suggestions && (
        <ComboboxPopover>
          {suggestions.length ? (
            <ComboboxList>
              {suggestions.map((quote) => {
                const value = `${quote.symbol}, ${quote.name}`;
                return (
                  <ComboboxOption
                    key={value}
                    value={value}
                    data-testid="combobox-option"
                  >
                    <div>
                      <div>{quote.name}</div>
                      <div>{quote.symbol}</div>
                    </div>
                  </ComboboxOption>
                );
              })}
            </ComboboxList>
          ) : null}
        </ComboboxPopover>
      )}
    </Combobox>
  );
}

export default Search;
