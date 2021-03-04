import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { PURPLE } from "../styles/themes";
import Global from "../styles/Global";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={PURPLE}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Global />
    </>
  );
}

export default App;
