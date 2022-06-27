import styled from 'styled-components';
import Header from './Header';
import WidgetBar from './WidgetBar';

type PageProps = {
  children: JSX.Element;
};

const InnerStyles = styled.div`
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }: PageProps) {
  return (
    <div>
      <Header />
      <WidgetBar />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
