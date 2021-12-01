import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { useInterval } from "react-use";
import React from "react";
import { load } from "fathom-client";

import { THEMES, LIGHT_BLUE } from "../styles/themes";
import Global from "../styles/Global";

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max);
}

const DELAY = 10 * 1000;
const FATHOM_SITE_ID = "BZDQICES";

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState(LIGHT_BLUE);

  React.useEffect(() => {
    load(FATHOM_SITE_ID, {
      url: "https://warbler.resumebuilder.dev/script.js",
      includedDomains: ["mersihaceranic.com", "www.mersihaceranic.com"],
    });
  }, []);

  useInterval(() => {
    const random = getRandomNumber(THEMES.length);

    setTheme(THEMES[random]);
  }, DELAY);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Global />
    </>
  );
}

export default App;
