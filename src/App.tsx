import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import todoapp from "./assets/imgs/todoapp.png";
import athkari from "./assets/imgs/athkari.png";
import eliteAcademy from "./assets/imgs/eliteAcademy1.png";
import eliteAcademy2 from "./assets/imgs/eliteAcademy2.png";
import freshproducts from "./assets/imgs/freshproducts.png";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
function App() {
  useEffect(() => {
    const handleLoad = () => {
      document.getElementById("loadingPage").style.display = "none";
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    };

    window.addEventListener("load", handleLoad);
    AOS.init();
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="position-relative fullcontainer">
      <Landing />
      <main>
        <Section name="about" title="About me">
          <div className="row">
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <p className="text-center m-auto">
                      Curiosity drives me to navigate diverse situations and
                      gain experience in various environments. I am a
                      self-learner who enjoys solving problems and learning new
                      algorithms. I am pursuing exciting opportunities to
                      enhance my skills and aspire to become a senior web
                      developer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section name="skills" title="My Skills">
          <div className="col-12 m-4">
            <div className="container">
              <div className="row">
                <Skill title="JavaScript" />
                <Skill title="ReactJS" />
                <Skill title="TypeScript" />
                <Skill title="PHP" />
                <Skill title="Bootstrap" />
                <Skill title="CSS" />
                <Skill title="SASS" />
                <Skill title="HTML5" />
                <Skill title="GIT" />
              </div>
            </div>
          </div>
        </Section>
        <Section name="portfolio" title="My Portfolio">
          <div className="row mt-3">
            <ProjectCard
              img={todoapp}
              link="https://github.com/amarelali/todoapp"
              alt="todo app"
              cardTitle="To-Do"
              technologies="ReactJS - Tailwind CSS - TypeScript - Strapi"
            />
            <ProjectCard
              img={athkari}
              link="https://github.com/amarelali/athkari"
              alt="athkari app"
              cardTitle="Athkari"
              technologies="ReactJS - SASS - Tailwind CSS - TypeScript"
            />
            <ProjectCard
              img={freshproducts}
              link="https://amarelali.github.io/freshproducts"
              alt="fresh product"
              cardTitle="Fresh Products"
              technologies="HTML5 - SASS - Bootstrap - JavaSript"
            />
            <ProjectCard
              img={eliteAcademy}
              link="https://eliteacademy.eu/"
              alt="elite academy app"
              cardTitle="Elite Academy v1"
              technologies="HTML5 - CSS - Bootstrap - JavaSript - JQuery - PHP"
            />
            <ProjectCard
              img={eliteAcademy2}
              link="https://t1.eliteacademy.eu/"
              alt="elite academy app"
              cardTitle="Elite Academy v2"
              technologies="HTML5 - CSS - Bootstrap - JavaSript - JQuery - PHP"
            />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
