import React from "react";
import { AppProps } from "next/app";
import { load } from "fathom-client";
import { ChakraProvider, Box } from "@chakra-ui/react";

import Header from "../comonents/Header";

const FATHOM_SITE_ID = "BZDQICES";

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    load(FATHOM_SITE_ID, {
      url: "https://warbler.resumebuilder.dev/script.js",
      includedDomains: ["mersihaceranic.com", "www.mersihaceranic.com"],
    });
  }, []);
  return (
    <ChakraProvider>
      <Header />
      <Box as={"main"} paddingTop={"32"}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
