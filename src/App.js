import Navbar from "./components/sections/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Portfolios from "./components/sections/Portfolios";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 -z-10 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,299,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Portfolios />
      <Contact />
    </div>
  );
}

export default App;
