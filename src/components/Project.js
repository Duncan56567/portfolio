import React from "react";
import "../styles/Project/project.css";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Arrow } from "../images/arrow-up-right.svg";

export const Project = () => {
  return (
    <section className="project" id="project">
      <div className="container">
        <p className="note">PORTFOLIO</p>
        <p className="title">Each project is a unique piece of development🧩</p>
        <div className="projectContainer">
          {/* project1 */}
          <div className="pro">
            <div className="imgContainer">
              <a
                href="https://github.com/Duncan56567"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={require("../images/hawaii.png")} alt="" />
              </a>
            </div>
            <div className="text">
              <p className="textTitle">HAWAII</p>
              <p className="content">
                Built the website of HAWAII with HTML. It is a travel equipment
                rental site which contains all you need during your travel.
              </p>
              <div className="skills">
                <div className="skill">HTML</div>
                <div className="skill">SCSS</div>
              </div>
              <div className="links">
                <a
                  href="https://github.com/Duncan56567"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Code <Github className="github" />
                </a>
                <a
                  href="https://github.com/Duncan56567"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Live Demo
                  <Arrow className="arrow" />
                </a>
              </div>
            </div>
          </div>
          {/* project 2 */}
          <div className="pro" id="reverse">
            <div className="imgContainer">
              <a
                href="https://github.com/Duncan56567"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={require("../images/photoWeb.png")} alt="" />
              </a>
            </div>
            <div className="text">
              <p className="textTitle">Photo Web</p>
              <p className="content">
                Photo Web is an user-friendly platform which allows user to
                search various photographs and download for free.
              </p>
              <div className="skills">
                <div className="skill">React</div>
                <div className="skill">SCSS</div>
              </div>
              <div className="links">
                <a
                  href="https://github.com/Duncan56567"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Code <Github className="github" />
                </a>
                <a
                  href="https://github.com/Duncan56567"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Live Demo
                  <Arrow className="arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
