import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=YourFontFamily:Weights&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
          <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,500;1,700&family=Roboto:wght@300;400;500;700&family=Tilt+Prism&display=swap" rel="stylesheet" />
          <link rel="icon" href="/icon.png"/>
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