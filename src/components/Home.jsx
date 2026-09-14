import profileImg from "../assets/white.jpeg";
function Home() {
    return (
        <section id="Home" className="h-screen w-full bg-[#f5f5f5f]">
            
            <div className="home-sec min-h-[700px] flex items-center justify-center p-[90px] gap-[50px]">
            
                <div className="home-text  w-[60%]">
                    <h1 className="intro-text text-6xl text-[#670620] py-[2%] mb-[3%]">
                        Hello, <span>I am</span>
                    </h1>
                   

                    <h1 className="intro-name text-[#5e2b2b] text-6xl pl-[5%] inline-block ">
                       RUPALI SINGH
                    </h1>
                    <p className="text-xl pt-[2%] mr-[5%] text-black">Curious enough to ask how it works.
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

                <div className="home-image w-[25%] h-[25%] fit-cover ">
                    <img src={profileImg} alt="Rupali" className="border-[8px] border border-white mb-[15%]"/>
                </div>

              

            </div>
            
                     

        </section>
    );
}

export default Home;