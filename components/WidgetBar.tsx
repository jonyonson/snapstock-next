import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
  const [isLoading, setIsLoading] = useState(true);
  const [dow, setDow] = useState(null);
  const [nasdaq, setNasdaq] = useState(null);
  const [sp500, setSp500] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/api/indices');
      const json = await data.json();

      const { dow, sp500, nasdaq } = json;
      setIsLoading(false);
      setDow(dow);
      setSp500(sp500);
      setNasdaq(nasdaq);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <StyledWidgetBar>
      <Widget
        loading={isLoading}
        change={dow?.['Change'] || null}
        percentChange={dow?.['Percent Change'] || null}
        price={dow?.['Quote Price'] || null}
        name="DJIA"
      />
      <Widget
        loading={isLoading}
        change={nasdaq?.['Change'] || null}
        percentChange={nasdaq?.['Percent Change'] || null}
        price={nasdaq?.['Quote Price'] || null}
        name="NASDAQ"
      />
      <Widget
        loading={isLoading}
        change={sp500?.['Change'] || null}
        percentChange={sp500?.['Percent Change'] || null}
        price={sp500?.['Quote Price'] || null}
        name="S&P 500"
      />
    </StyledWidgetBar>
  );
}
