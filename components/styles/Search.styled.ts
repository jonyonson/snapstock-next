import styled from 'styled-components';

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

export default StyledSearch;
export { StyledComboboxOption };
