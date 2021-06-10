import Head from "next/head";
import About from "../components/layout/About";
import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import Projects from "../components/layout/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lewis Rotchell || Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta description="Sheffield based web developer specializing in building cool looking responsive websites with accesibility and performance in mind." />
        <link rel="icon" type="image/png" href="/lrFavicon.png" />
      </Head>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
