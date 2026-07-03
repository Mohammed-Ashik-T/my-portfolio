import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />

        <section id="experience" className="py-24" />
      </main>
    </>
  );
}