import profileImg from "../assets/1.jpg";
function About() {
    return (
        <section id="sec" className="min-h-screen w-full bg-[#0E1118]">
            
            <div className="about-sec">
                
                <div className="about-image">
                    <img src={profileImg} alt="Rupali" />
                </div>

                <div className="about-text">
                    <h1 className="intro-text">
                        Hello,
                    </h1>
                   

                    <h1 className="intro-name">
                        I am <span>Rupali Singh</span>
                    </h1>
                    <p className="text-white text-1xl">a developer, learner, and curious mind exploring the world of web technology. I like creating things, breaking them, and figuring out how to make them better.</p>
                </div>

            </div>
            
                     

        </section>
    );
}

export default About;