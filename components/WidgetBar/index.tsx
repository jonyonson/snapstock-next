// Components
import Widget from './Widget';

// Styles
import StyledWidgetBar from './WidgetBar.styled';

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
