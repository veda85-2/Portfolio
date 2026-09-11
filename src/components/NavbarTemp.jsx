function Navbar(){
    return(
        <nav className=" bg-transparent text-white mx-auto mt-5">
          <h1 className=" relative left-5">Rupali Singh</h1>
          <div className="flex gap-10 px-8 justify-between">
            <a href="#home" className="nav-links">Home</a>
              <a href="#About" className="nav-links">About</a>
                <a href="#Projects" className="nav-links">projects</a>
                  <a href="#Contact" className="nav-links">Contact</a>
                 
          </div>
        </nav>
    );
}
export default Navbar;
