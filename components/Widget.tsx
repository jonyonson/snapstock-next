import styled from 'styled-components';

type StyledWidgetProps = {
  positiveChange: boolean;
};

const StyledWidget = styled.div<StyledWidgetProps>`
  font-size: 0.7rem;
  color: var(--color-white);
  width: 150px;
  padding: 5px;

  background-color: ${({ positiveChange }) =>
    positiveChange ? 'var(--color-gain)' : 'var(--color-loss)'};

  .name {
    font-size: 1.1em;
    font-weight: 600;
  }

  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .last-time {
    margin-top: 0.75rem;
    font-size: 0.75em;
    text-transform: uppercase;
    font-weight: 300;
  }
`;

const TriangleDown = styled.div`
  border-top: 10px solid #fff;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
`;

const TriangleUp = styled.div`
  border-bottom: 10px solid #fff;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
`;

type WidgetProps = {
  name: string;
  price: number;
  change: number;
  percentChange: number;
};

export default function Widget({
  name,
  price,
  change,
  percentChange,
}: WidgetProps) {
  const formattedPrice = new Intl.NumberFormat().format(price);
  const roundedChange = Math.round((change + Number.EPSILON) * 100) / 100;
  const roundedPercentChange =
    Math.round((percentChange + Number.EPSILON) * 100) / 100;

  const positiveChange = change > 0;

  const prefix = (num: number) => (positiveChange ? `+${num}` : num);

  return (
    <StyledWidget positiveChange={positiveChange}>
      <div className="row">
        <div className="name">{name}</div>
        <div>{formattedPrice}</div>
      </div>
      <div className="row">
        {positiveChange ? <TriangleUp /> : <TriangleDown />}
        <div>{prefix(roundedChange)}</div>
        <div>{prefix(roundedPercentChange) + '%'}</div>
      </div>
      <div className="last-time">Last | 4:22:19 PM EDT</div>
    </StyledWidget>
  );
}
