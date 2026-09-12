
function Project() {
    return (
        <section id="Project" className="project-section flex justify-center items-center w-full min-h-[80vh] gap-[20px] px-[8%] py-[20px]">

            <div className="cards w-[20%] min-h-[250px] p-[20px] ">
                  <span className="project-number">01</span>
                  <h1>weather</h1>
                    <p>A responsive weather application with city search, current weather data and 7-day forecasting."</p>
                 <div className="card-bottom">
            <span>React · JavaScript · API</span>

        <a
            href="https://github.com/veda85-2/weather_page.git"
            target="_blank"
            rel="noopener noreferrer"
        >
            GitHub ↗
        </a>
       </div>
    </div>

               <div className="cards w-[20%] min-h-[250px] p-[20px] ">
                  <span className="project-number">02</span>
                  <h1>student_managemnet</h1>
                      <p> "A Python-based CRUD application for managing student records using CSV file storage.",</p>
                 <div className="card-bottom">
            <span>PYTHON</span>
         <a
            href="https://github.com/veda85-2/student_managemnet_system.git"
            target="_blank"
            rel="noopener noreferrer"
        >
            GitHub ↗
        </a>
       </div>
    </div> 
         
 <div className="cards w-[20%] min-h-[250px] p-[20px] ">
              <span className="project-number">03</span>
              <h1>Aibot</h1>
              <p>"An experimental AI-based project focused on interacting with an intelligent conversational system."</p>
            <div className="card-bottom">
               <span>n8n. Docker. publicHost</span>
                 <a
                    href="https://github.com/veda85-2/aibot.git"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub ↗
                </a>
            </div>
            </div>

        </section>
    );
}
export default Project;
