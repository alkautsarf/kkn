import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head></Head>
        <body className="bg-[#F9F6EE]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
