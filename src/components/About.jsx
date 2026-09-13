
function About() {
  return (
    <section id="About" className="about-section min-h-screen px-[8%] py-[100px]">
      
      <div className="about-container w-full max-w-[1200px] grid grid-cols-[1fr_1.2fr] mx-[10%] gap-[40px] items-center">

        <div className="about-intro flex flex-col justify-center">
          <p className="section-tag ">ABOUT ME</p>

          <h2 className="idea">
            Building ideas into
            <span className="block"> interactive experiences.</span>
          </h2>
        </div>

       
        <div className="about-content max-w-[650px]">
          <p>
            Hi, I'm <strong className="opacity-100">Rupali</strong>, an Electronics and Communication
            Engineering student with a strong interest in software development
            and modern web technologies.
          </p>

          <p>
            I enjoy turning ideas into clean, interactive, and responsive
            websites. I'm currently focusing on strengthening my JavaScript
            fundamentals and building my skills with React while continuously
            improving my problem-solving abilities.
          </p>

          <p>
            I believe in learning by building. From small frontend experiments
            to complete projects, I like understanding how things work behind
            the interface and then turning that knowledge into something useful.
          </p>

          <div className="about-stats flex gap-[60px]">
            <div>
              <h3>01+</h3>
              <span>Years Learning</span>
            </div>

            <div>
              <h3>03+</h3>
              <span>Projects</span>
            </div>

            <div>
              <h3>∞</h3>
              <span>Things to Learn</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;






