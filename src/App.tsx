import Navbar from "./components/navbar/Navbar.tsx";
import Home from "./sections/home/Home.tsx";
import About from "./sections/about/About.tsx";
import Experiences from "./sections/experiences/Experiences.tsx";
import Projects from "./sections/Projects/Projects.tsx";
import Footer from "./sections/footer/Footer.tsx";
import Particles from "./components/particles/ParticlesBackground.tsx";

import "./App.css";
function App() {
  return (
    <div className="General">
      <Particles />
      <Navbar />
      <Home />
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
