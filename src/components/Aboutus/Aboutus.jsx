import React from "react";
import "./Aboutus.scss";
import "../../assets/styles/variables/variable.scss";
import Line from "../../components/ProjectCard/Line";
const Aboutus = () => {
  return (
    <div className="technology__aboutme--section">
      <h2 data-aos="fade-up" className="about__heading">
        <Line heading={"About Me"} />
      </h2>

      <p data-aos="fade-up" className="aboutme--lead">
        Get to know me
      </p>
      <p data-aos="fade-up" className="aboutme--text">
        Hello there! My name is Prakash, and I completed my Mechanical
        Engineering degree in 2017. After working as a machine operator for some
        time, I discovered my passion for web development and made a career
        transition in 2022. Since then, I have been a self-learner, acquiring
        skills in{" "}
        <strong className="strong--tech">
          {" "}
          HTML, CSS, JavaScript, React, Git, GitHub, Sass, Tailwind, and
          Bootstrap{" "}
        </strong>{" "}
        through online resources. I have successfully completed several
        beginner-level projects, gaining valuable hands-on experience in web
        development. My ultimate goal is to become a software engineer, and I am
        determined to continue expanding my knowledge and expertise in this
        field.
      </p>
    </div>
  );
};

export default Aboutus;
