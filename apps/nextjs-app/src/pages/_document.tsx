// pages/_document.tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script type="module" src="/component-gallery/component-gallery.esm.js" async></script>
          <script type="module" src="/adaptive-hub-layout/adaptive-hub-layout.esm.js" async></script>
          {/* <script nomodule src="/component-gallery/component-gallery.js"></script> */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://js.arcgis.com/calcite-components/1.2.0/calcite.css"
            
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
