import styled from 'styled-components';

const StyledWidgetBar = styled.div`
  display: flex;
  max-width: 100%;
  width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;

  > div {
    margin-right: 1rem;
  }

  > div:last-child {
    margin-right: 0;
  }
`;

export default StyledWidgetBar;
