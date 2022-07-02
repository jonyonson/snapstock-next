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

  const price = data?.price;
  const change = data?.change;
  const percentChange = data?.percentChange;

  const formattedPrice = format(price);

  const roundedChange =
    change !== undefined
      ? Math.round((change + Number.EPSILON) * 100) / 100
      : 0;

  const roundedPercentChange =
    percentChange !== undefined
      ? Math.round((percentChange + Number.EPSILON) * 100) / 100
      : 0;

  const isChangePositive = data?.change !== undefined ? data.change > 0 : null;

  const prefix = (num: number) => (isChangePositive ? `+${num}` : num);

  const displayLoadingOrValue = (value: any) => {
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
        <div>{displayLoadingOrValue(prefix(roundedChange))}</div>
        <div>{displayLoadingOrValue(prefix(roundedPercentChange)) + '%'}</div>
      </div>
      {/* <div className="last-time">Last | 4:22:19 PM EDT</div> */}
    </StyledWidget>
  );
}
