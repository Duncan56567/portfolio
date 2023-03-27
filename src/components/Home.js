import React from "react";
import "../styles/Home/home.css";
import { ReactComponent as CSS } from "../images/css.svg";
import { ReactComponent as HTML } from "../images/html.svg";
import { ReactComponent as JS } from "../images/js.svg";
import { ReactComponent as REACT } from "../images/react.svg";
import { ReactComponent as MongoDB } from "../images/mongodb.svg";
import { ReactComponent as MySQL } from "../images/mysql.svg";
import { ReactComponent as Git } from "../images/git.svg";
import { ReactComponent as Github } from "../images/github.svg";

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="topSec">
        <div className="text">
          <div className="title">
            Front-End React Developer
            <img src={require("../images/waveHand.png")} alt="" />
          </div>
          <div className="content">
            Hi, I'm Duncan. A passionate Front-end Developer based in Taiwan📍
          </div>
          <div className="link">
            <a
              href="https://github.com/Duncan56567"
              target={"_blank"}
              rel="noreferrer"
            >
              <Github />
            </a>
          </div>
        </div>
        <div className="heroImg" />
        {/* <img src={require("../images/avatar.png")} /> */}
      </div>
      <div className="bottomSec">
        <p>Tech Stack</p>
        <ul>
          <li>
            <HTML />
          </li>
          <li>
            <CSS />
          </li>
          <li>
            <JS />
          </li>
          <li>
            <REACT />
          </li>
          <li>
            <MongoDB />
          </li>
          <li>
            <MySQL />
          </li>
          <li>
            <Git />
          </li>
        </ul>
      </div>
    </section>
  );
};
