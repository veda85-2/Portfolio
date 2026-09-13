function Skills() {
  return (
    <section id="skills" className="min-h-screen px-[8%] py-24 text-white w-full h-screen  flex justify-center items-center">

    <div className="head">  <h1 className="text-4xl font-semibold">
          My <span className="text-black">Skills</span>
      </h1>
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">

        <div className="skill-box">
          <h2>HTML</h2>
          <p>Building structured and semantic webpages.</p>
        </div>

        <div className="skill-box">
          <h2>CSS</h2>
          <p>Responsive layouts, styling and animations.</p>
        </div>

        <div className="skill-box">
          <h2>JavaScript</h2>
          <p>Working with logic, DOM and APIs.</p>
        </div>

        <div className="skill-box">
          <h2>React</h2>
          <p>Currently learning component-based development.</p>
        </div>

        <div className="skill-box">
          <h2>Python</h2>
          <p>Building basic applications and working with data.</p>
        </div>

        <div className="skill-box">
          <h2>Git & GitHub</h2>
          <p>Version control and project collaboration.</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;