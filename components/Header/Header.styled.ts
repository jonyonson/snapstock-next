import styled from 'styled-components';

const StyledHeader = styled.header`
  max-width: 100%;
  width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  h1 {
    margin: 0;

    @media screen and (max-width: 600px) {
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default StyledHeader;
