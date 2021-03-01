import type { AppProps } from "next/app";

import Global from "../styles/Global";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Global />
    </>
  );
}

export default App;
