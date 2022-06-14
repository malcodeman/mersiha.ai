import React from "react";
import { AppProps } from "next/app";
import { load } from "fathom-client";
import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";

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

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    load(constants.FATHOM_ANALYTICS.siteId, {
      url: constants.FATHOM_ANALYTICS.url,
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
