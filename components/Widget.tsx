import styled from 'styled-components';

type StyledWidgetProps = {
  positiveChange: boolean;
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

  background-color: ${({ positiveChange }) =>
    positiveChange ? 'var(--color-gain)' : 'var(--color-loss)'};

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

const TriangleDown = styled.div`
  border-top: 8px solid var(--color-white);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
`;

const TriangleUp = styled.div`
  border-bottom: 8px solid var(--color-white);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
`;

const LoadingWidget = styled.div`
  background-color: var(--color-gray);
  height: 50px;
  width: 150px;
`;

type WidgetProps = {
  name: string;
  price: number | null;
  change: number | null;
  percentChange: number | null;
  loading: boolean;
};

export default function Widget({
  name,
  price,
  change,
  percentChange,
  loading,
}: WidgetProps) {
  if (loading || price === null || change === null || percentChange === null) {
    return <LoadingWidget />;
  }
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
      {/* <div className="last-time">Last | 4:22:19 PM EDT</div> */}
    </StyledWidget>
  );
}
