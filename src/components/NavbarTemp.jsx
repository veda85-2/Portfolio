function Navbar(){
    return(
        <nav className=" bg-transparent text-white mx-auto mt-5">
          <h1 className=" relative left-5 font-bold text-2xl">Rupali Singh</h1>
          <div className="flex gap-10 px-8 justify-between">
            <a href="#Home" className="nav-links">Home</a>
              <a href="#About" className="nav-links">About</a>
                <a href="#Project" className="nav-links">projects</a>
                  <a href="#Contact" className="nav-links">Contact</a>
                 
          </div>
        </nav>
    );
}
export default Navbar;
