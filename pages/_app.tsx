import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

// Styles
import 'normalize.css/normalize.css';
import GlobalStyle from 'styles/global.styled';

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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
