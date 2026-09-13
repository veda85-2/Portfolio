import profileImg from "../assets/white.jpeg";
function Home() {
    return (
        <section id="Home" className="min-h-screen w-full bg-[#f5f5f5f]">
            
            <div className="home-sec">
                
                <div className="home-image">
                    <img src={profileImg} alt="Rupali" />
                </div>

                <div className="home-text">
                    <h1 className="intro-text">
                        Hello, <span>I am</span>
                    </h1>
                   

                    <h1 className="intro-name">
                       RUPALI SINGH
                    </h1>
                    <p className="text-white text-xl">Curious enough to ask how it works.
                                        Stubborn enough to build it myself.
                                          I'm Rupali Singh

                                   Frontend Developer • Builder • Learner</p>

                                     <div className="buton flex w-[80%] h-[10%] gap-[20px] mt-[30%]">
                    <a href="#Project" className="btn border-1 border border-red-700 w-[60%] flex justify-center items-center text-red-700 h-full">
                    project
                </a>
                <button className="btn bg-[#6e2b2b45] border-1 border border-red-800 w-[60%] h-full">
                    Resume
                </button></div>
                </div>
              

            </div>
            
                     

        </section>
    );
}

export default Home;