import { useState } from "react";
import Home from "./components/Home.jsx";
import Intro from "./components/Intro.jsx";
import Navbar from "./components/NavbarTemp.jsx";
import About from "./components/About";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Project.jsx";
import Contact from "./components/Contacts.jsx";

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
          <Home/>
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