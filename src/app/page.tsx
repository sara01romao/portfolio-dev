import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Repos from "../components/Repos";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Repos />
      <Contact />
    </main>
  );
}
