import React from "react";
import "./Technology.scss";
import Aboutus from "../../components/Aboutus/Aboutus";
import Icon1 from "../../assets/images/tech/html5.png";
import Icon2 from "../../assets/images/tech/css3.png";
import Icon3 from "../../assets/images/tech/javascript.png";
import Icon4 from "../../assets/images/tech/react.png";
import Icon5 from "../../assets/images/tech/sass.png";
import Icon6 from "../../assets/images/tech/pngwing.com.png";
import Icon7 from "../../assets/images/tech/bootstrap.png";
import Icon8 from "../../assets/images/tech/visual-studio-team-services-github.png";
import Icon9 from "../../assets/images/tech/nextjs-icon.png";
const Technology = () => {
  const technology = [
    { title: "html", icon: Icon1, id: 1 },
    { title: "css", icon: Icon2, id: 2 },
    { title: "javascript", icon: Icon3, id: 3 },
    { title: "reactjs", icon: Icon4, id: 4 },
    { title: "Nextjs", icon: Icon9, id: 5 },
    { title: "scss", icon: Icon5, id: 6 },
    { title: "bootstrap", icon: Icon6, id: 7 },
    { title: "tailwind css", icon: Icon7, id: 8 },
    { title: "git & github", icon: Icon8, id: 9 },
  ];
  return (
    <section id="aboutMe" className="technology__section">
      <div className="section__technnology--wrapper">
        <Aboutus />
        <div className="tech__known--section">
          <p className="tech__lead--known">
            Here are a few technologies I’ve been working with recently
          </p>

          <div data-aos="fade-up" className="technology__known--section">
            {technology.map((tech) => {
              return (
                <div key={tech.id} className="tech__known">
                  <img src={tech.icon} alt="icon" />

                  <span>{tech.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
