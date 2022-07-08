import styled from 'styled-components';

const StyledWidgetBar = styled.div`
  display: flex;
  max-width: 100%;
  width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  overflow-x: auto;
  overflow-y: hidden;

  @media screen and (min-width: 600px) {
    justify-content: space-between;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  > div {
    margin-right: 1rem;
  }

  > div:last-child {
    margin-right: 0;
  }
`;

export default StyledWidgetBar;
