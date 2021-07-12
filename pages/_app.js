import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lewis Rotchell Web Developer</title>
        <meta
          name="description"
          content="Sheffield based web developer specializing in building cool looking responsive websites with accesibility and performance in mind."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/lrFavicon.png" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
