import useQuote from '../hooks/use-quote';
import format from '../lib/format-money';

// Styles
import StyledTriangle from './styles/Triangle.styled';
import StyledWidget from './styles/Widget.styled';

type WidgetProps = {
  name: string;
  symbol: string;
};

const REFRESHING_INTERVAL = process.env.NODE_ENV === 'development' ? 0 : 15000;

export default function Widget({ name, symbol }: WidgetProps) {
  const { data, loading } = useQuote(symbol, REFRESHING_INTERVAL);

  const formattedPrice = format(data?.price);
  const formattedChange = format(data?.change, { prefix: '+' });
  const formattedPercentChange = format(data?.percentChange, {
    prefix: '+',
    suffix: '%',
  });

  const isChangePositive = data?.change !== undefined ? data.change > 0 : null;

  const displayLoadingOrValue = (value: string | number | undefined) => {
    return loading ? '--' : value;
  };
  return (
    <StyledWidget
      $isChangePositive={isChangePositive}
      $loading={loading}
      data-testid="widget"
    >
      <div className="row">
        <div className="name">{name}</div>
        <div>{displayLoadingOrValue(formattedPrice)}</div>
      </div>
      <div className="row">
        <StyledTriangle $loading={loading} $gain={isChangePositive} />
        <div>{displayLoadingOrValue(formattedChange)}</div>
        <div>{displayLoadingOrValue(formattedPercentChange)}</div>
      </div>
    </StyledWidget>
  );
}
