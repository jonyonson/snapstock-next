import styled from 'styled-components';

type StyledWidgetProps = {
  $isChangePositive: boolean | null;
  $loading: boolean;
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

  background-color: ${({ $isChangePositive, $loading }) => {
    if ($loading) return 'var(--color-gray)';
    return $isChangePositive ? 'var(--color-gain)' : 'var(--color-loss)';
  }};

  .name {
    font-weight: 600;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }
`;

export default StyledWidget;
