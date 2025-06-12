// pages/_app.js
import "../styles/globals.css"; // ajuste o caminho se estiver diferente

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
