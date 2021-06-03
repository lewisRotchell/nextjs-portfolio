import About from "../components/layout/About";
import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import Projects from "../components/layout/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
