import React from "react";
import "../styles/Footer/footer.css";
import { ReactComponent as Github } from "../images/github.svg";

export const Footer = () => {
  return (
    <section className="footer">
      <div className="content">
        Copyright © 2023. All rights are reserved
        <div className="links">
          <a
            href="https://github.com/Duncan56567"
            target={"_blank"}
            rel="noreferrer"
            className="icons"
          >
            <Github className="github" />
          </a>
        </div>
      </div>
    </section>
  );
};
