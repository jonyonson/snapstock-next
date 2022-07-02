import Header from './Header';
import WidgetBar from './WidgetBar';
import StyledPage from './styles/Page.styled';

type PageProps = {
  children: JSX.Element;
};

export default function Page({ children }: PageProps) {
  return (
    <div>
      <Header />
      <WidgetBar />
      <StyledPage>{children}</StyledPage>
    </div>
  );
}
