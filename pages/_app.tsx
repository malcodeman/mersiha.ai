import React from "react";
import { AppProps } from "next/app";
import { load, trackPageview } from "fathom-client";
import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import Router from "next/router";

import constants from "../lib/constants";

import Header from "../comonents/Header";

const THEME = extendTheme({
  styles: {
    global: {
      html: {
        scrollbarWidth: "thin",
      },
      "html::-webkit-scrollbar": {
        width: "8px",
      },
      "html::-webkit-scrollbar-thumb": {
        backgroundColor: "#72757b",
      },
    },
  },
});

Router.events.on("routeChangeComplete", (_as, routeProps) => {
  if (!routeProps.shallow) {
    trackPageview();
  }
});

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    load(constants.FATHOM_ANALYTICS.siteId, {
      includedDomains: constants.FATHOM_ANALYTICS.includedDomains,
    });
  }, []);
  return (
    <ChakraProvider theme={THEME}>
      <Header />
      <Box as={"main"} paddingTop={"32"}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
