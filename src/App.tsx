import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <Header />
      <About />
      <Skill />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
