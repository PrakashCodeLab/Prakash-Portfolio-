import React from "react";
import "./Hero.scss";
import ImgSection from "./ImgSection";

import MyResume from "../../assets/Doc/Prakash resume.pdf";
import Line from "../../components/ProjectCard/Line";



const Hero = () => {
  return (
    <div className="header__hero__section">
      <div
        data-aos="fade-right"
        data-aos-delay="900"
        data-aos-duration="1500"
        className="header__hero--content">
        <p className="lead">Hi, my name is</p>
        <Line heading={"prakash!"} />
        <p className="lead__designation">
          “I’m passionate about software development and I’m skilled in HTML, css ,
          JavaScript, and React. I’m now looking for a junior dev position as I
          recently learned how to code by myself.”
        </p>

        <a href={MyResume} download className="btn-resume">
         
          my resume
        </a>
      </div>
      <div  data-aos="fade-left" data-aos-delay="900" className="hero__section--img__container"> 
      <ImgSection />
      </div>
     
    </div>
  );
};

export default Hero;
