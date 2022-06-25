import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

// Styles
import 'normalize.css/normalize.css';
import GlobalStyle from 'styles/global.styled';

// Components
import Page from '@/components/Page';

interface ThemeInterface {
  colors: {
    primary: string;
  };
}

const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
  },
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    </>
  );
}

export default App;
