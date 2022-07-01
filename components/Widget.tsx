import styled from 'styled-components';
import format from '../lib/format-money';

type StyledWidgetProps = {
  $positiveChange: boolean | null;
  $loading: boolean;
};

type StyledTriangleProps = {
  $loading: boolean;
  $gain: boolean | null;
};

type WidgetProps = {
  name: string;
  price: number | undefined;
  change: number | undefined;
  percentChange: number | undefined;
  loading: boolean;
};

const StyledWidget = styled.div<StyledWidgetProps>`
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-white);
  width: 150px;
  height: 50px;
  padding: 6px;
  line-height: 1;

  background-color: ${({ $positiveChange, $loading }) => {
    if ($loading) return 'var(--color-gray)';
    return $positiveChange ? 'var(--color-gain)' : 'var(--color-loss)';
  }};

  .name {
    font-weight: 600;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .last-time {
    font-size: 0.75em;
    text-transform: uppercase;
    font-weight: 300;
  }
`;

const borderColor = ($loading: boolean) =>
  $loading ? 'var(--color-gray)' : 'var(--color-white)';

const borderBottom = ({ $loading, $gain }: StyledTriangleProps) =>
  `${$gain ? '8px' : '0'} solid ${borderColor($loading)}`;

const borderTop = ({ $loading, $gain }: StyledTriangleProps) =>
  `${$gain ? '0' : '8px'} solid ${borderColor($loading)}`;

const Triangle = styled.div<StyledTriangleProps>`
  border-bottom: ${(props) => borderBottom(props)};
  border-top: ${(props) => borderTop(props)};
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
`;

export default function Widget({
  name,
  price,
  change,
  percentChange,
  loading,
}: WidgetProps) {
  const formattedPrice = price ? format(price) : null;

  const roundedChange =
    change !== undefined
      ? Math.round((change + Number.EPSILON) * 100) / 100
      : 0;

  const roundedPercentChange =
    percentChange !== undefined
      ? Math.round((percentChange + Number.EPSILON) * 100) / 100
      : 0;

  const positiveChange = change !== undefined ? change > 0 : null;

  const prefix = (num: number) => (positiveChange ? `+${num}` : num);

  return (
    <StyledWidget
      $positiveChange={positiveChange}
      $loading={loading}
      data-testid="widget"
    >
      <div className="row">
        <div className="name">{name}</div>
        <div>{loading ? '--' : formattedPrice}</div>
      </div>
      <div className="row">
        <Triangle $loading={loading} $gain={positiveChange} />
        <div>{loading ? '--' : prefix(roundedChange)}</div>
        <div>{loading ? '--' : prefix(roundedPercentChange) + '%'}</div>
      </div>
      {/* <div className="last-time">Last | 4:22:19 PM EDT</div> */}
    </StyledWidget>
  );
}
