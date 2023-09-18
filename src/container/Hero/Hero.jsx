
import "./Hero.scss";
import ImgSection from "./ImgSection";

import MyResume from "../../assets/Doc/Resume.pdf";
import Line from "../../components/ProjectCard/Line";

const Hero = () => {
  return (
    <div className="header__hero__section">
      <div
        data-aos="fade-right"
        data-aos-delay="900"
        data-aos-duration="1500"
        className="header__hero--content"
      >
        <p className="lead">Hi, my name is</p>
        <Line heading={"prakash!"} />
        <p className="lead__designation">I am deeply passionate about software development, and I possess proficiency in essential programming languages such as <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Nextjs</strong> and <strong>Typescript</strong> Currently, I am actively seeking a junior developer position, as I have recently acquired coding skills through self-learning.
</p>
        <a href={MyResume} download className="btn-resume">
          my resume
        </a>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="900"
        className="hero__section--img__container"
      >
        <ImgSection />
      </div>
    </div>
  );
};

export default Hero;
