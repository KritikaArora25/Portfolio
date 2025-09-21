import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";


export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
