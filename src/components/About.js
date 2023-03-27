import React from "react";
import "../styles/About/about.css";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="leftSec">
          <img src={require("../images/about.png")} alt="" />
        </div>
        <div className="rightSec">
          <p className="note">ABOUT ME</p>
          <div className="title">
            A passionate Front-end Developer based in Taiwan📍
          </div>
          <div className="content">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </div>
        </div>
      </div>
    </section>
  );
};
