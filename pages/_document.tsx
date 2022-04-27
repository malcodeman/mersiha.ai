import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/color-mode";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="en">
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta
            name="og:description"
            content="Mersiha Ćeranić - Data Science Developer"
          />
          <meta
            name="description"
            content="Mersiha Ćeranić - Data Science Developer"
          />
          <meta property="og:image" content="opengraph.png"></meta>
        </Head>
        <body>
          <ColorModeScript initialColorMode="light" />
          <Main />
          <div id="root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
