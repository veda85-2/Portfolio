import Navbar from './components/NavbarTemp.jsx'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx'; 
// import Intro from './components/intro.jsx'; 


function App() {
  return (
    <>
    {/* <Intro/> */}
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      
    </>
  );
}

export default App;