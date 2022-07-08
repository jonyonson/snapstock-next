import styled from 'styled-components';

type StyledTriangleProps = {
  $loading: boolean;
  $gain: boolean | null;
};

const borderColor = ($loading: boolean) =>
  $loading ? 'var(--color-gray)' : 'var(--color-white)';

const borderBottom = ({ $loading, $gain }: StyledTriangleProps) =>
  `${$gain ? '8px' : '0'} solid ${borderColor($loading)}`;

const borderTop = ({ $loading, $gain }: StyledTriangleProps) =>
  `${$gain ? '0' : '8px'} solid ${borderColor($loading)}`;

const StyledTriangle = styled.div<StyledTriangleProps>`
  border-bottom: ${(props) => borderBottom(props)};
  border-top: ${(props) => borderTop(props)};
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
`;

export default StyledTriangle;
export { borderBottom, borderTop };
