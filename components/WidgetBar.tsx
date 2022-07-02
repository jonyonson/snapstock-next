import useQuote from 'hooks/use-quote';
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
  return (
    <StyledWidgetBar>
      <Widget name="DJIA" symbol="^dji" />
      <Widget name="NASDAQ" symbol="^ixic" />
      <Widget name="S&amp;P 500" symbol="^gspc" />
      <Widget name="RUSS 2K" symbol="^rut" />
      <Widget name="VIX" symbol="^vix" />
    </StyledWidgetBar>
  );
}
