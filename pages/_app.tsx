import React from "react";
import { AppProps } from "next/app";
import { load } from "fathom-client";
import { ChakraProvider } from "@chakra-ui/react";

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
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
