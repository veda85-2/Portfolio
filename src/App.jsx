import { useState } from "react";
import HOME from "./components/Home.jsx";
import Intro from "./components/intro.jsx";
import Navbar from "./components/NavbarTemp.jsx";
import About from "./components/About";
import Skills from "./components/skil.jsx";
import Projects from "./components/Project.jsx";
import Contact from "./components/contact.jsx";

function App() {

  const [showIntro, setShowIntro] = useState(
    sessionStorage.getItem("introSeen") !== "true"
  );

  const enterPortfolio = () => {
    sessionStorage.setItem("introSeen", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <Intro onEnter={enterPortfolio} />
      ) : (
        <>
        
          <Navbar />
          <HOME/>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;