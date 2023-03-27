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
            As a novice front-end engineer, I am proficient in fundamental
            skills such as HTML, CSS, Javascript, React, and SCSS, and develop
            user-friendly and responsive websites with clean and
            easy-to-understand code. I excel in teamwork and communicate
            effectively with people from different perspectives. Additionally, I
            have learned some back-end skills such as NodeJS and database
            control, and hope to become a full-stack engineer in the future.
          </div>
        </div>
      </div>
    </section>
  );
};
