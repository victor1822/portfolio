import React from 'react';
import '../globalStyles/global.css';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../globalStyles/defaultTheme'
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        <title>Victor Sales | Front End Developer</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;