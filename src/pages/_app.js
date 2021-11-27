import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat'
    ].join(',')
  }
})

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <div style={{'width': '100%'}}>
        <Head>
          <title>Núcleo São Paulo</title>
          <meta name="description" content="O Núcleo São Paulo é uma instância que promove o
                  desenvolvimento de jovens universitários que fazem parte do Movimento Empresa Júnior" />
          <link rel="icon" href="/logo.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&display=swap"
            rel="stylesheet"
          />
        </Head>
        <NavBar />
        <Component {...pageProps} />
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
