import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ParticleBackground from "./components/Particles";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ParticleBackground />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <Testimonials />*/}
    </>
  );
};

export default App;
