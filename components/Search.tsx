import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

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

const StyledSearch = styled.div`
  width: 100%;

  @media screen and (min-width: 600px) {
    width: auto;
  }

  [data-reach-combobox-input] {
    border: 1px solid rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 50px;
    padding: 0.75rem;

    @media screen and (min-width: 600px) {
      min-width: 320px;
    }
  }

  [data-reach-combobox-input]::placeholder {
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    margin-right: 1rem;
  }
`;

const StyledComboboxOption = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding: 0.25rem;

  div:first-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

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
