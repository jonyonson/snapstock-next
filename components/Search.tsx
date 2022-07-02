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
import StyledSearch, { StyledComboboxOption } from './styles/Search.styled';

type SearchProps = {
  placeholder: string;
  className?: string;
};

function Search({ placeholder, className }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const { suggestions } = useSearch(searchTerm);
  const router = useRouter();

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleSelect = (item: string) => {
    const symbol = item.split(',')[0];
    setSearchTerm('');
    router.push(`/quote/${symbol.toUpperCase()}`);
  };

  return (
    <StyledSearch>
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
                      <StyledComboboxOption>
                        <div>{quote.name}</div>
                        <div>{quote.symbol}</div>
                      </StyledComboboxOption>
                    </ComboboxOption>
                  );
                })}
              </ComboboxList>
            ) : null}
          </ComboboxPopover>
        )}
      </Combobox>
    </StyledSearch>
  );
}

export default Search;
