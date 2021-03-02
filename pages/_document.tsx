import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="en">
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <Main />
          <div id="root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
