import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements"; // ✅ ADD THIS LINE
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import AnimatedSection from "./components/AnimatedSection";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <ScrollProgressBar />
      <Navbar />

      <AnimatedSection direction="zoom">
        <Hero />
      </AnimatedSection>

      <AnimatedSection direction="left">
        <About />
      </AnimatedSection>

      <AnimatedSection direction="right">
        <Experience />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <Projects />
      </AnimatedSection>

      <AnimatedSection direction="zoom">
        <Skills />
      </AnimatedSection>

      {/* ✅ Achievements Section Added Here */}
      <AnimatedSection direction="zoom">
        <Achievements />
      </AnimatedSection>

      <AnimatedSection direction="left">
        <Education />
      </AnimatedSection>

      <AnimatedSection direction="right">
        <Certificates />
      </AnimatedSection>

      <AnimatedSection direction="up">
        <Contact />
      </AnimatedSection>

      <AnimatedSection direction="zoom">
        <Footer />
      </AnimatedSection>
    </div>
  );
}

export default App;
