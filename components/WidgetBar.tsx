import styled from 'styled-components';
import useIndices from '../hooks/use-indices';

// Components
import Widget from './Widget';

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

export default function WidgetBar() {
  const { dow, nasdaq, sp500, loading, error } = useIndices();
  if (error) {
    console.error(error);
  }

  const isLoading = loading || error;

  return (
    <StyledWidgetBar>
      <Widget
        loading={isLoading}
        change={dow?.change}
        percentChange={dow?.percentChange}
        price={dow?.price}
        name="DJIA"
      />
      <Widget
        loading={isLoading}
        change={nasdaq?.change}
        percentChange={nasdaq?.percentChange}
        price={nasdaq?.price}
        name="NASDAQ"
      />
      <Widget
        loading={isLoading}
        change={sp500?.change}
        percentChange={sp500?.percentChange}
        price={sp500?.price}
        name="S&P 500"
      />
    </StyledWidgetBar>
  );
}
