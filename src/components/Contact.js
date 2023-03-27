import React from "react";
import "../styles/Contact/contact.css";
import { ReactComponent as Mail } from "../images/mail.svg";
import { ReactComponent as Location } from "../images/location.svg";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="top">
          <p className="note">CONTACT</p>
          <p className="title">Dont't be shy! Hit me up!👇</p>
        </div>
        <div className="bottom">
          <div className="section">
            <div className="iconContainer">
              <Location className="icon" />
            </div>
            <div className="text">
              <p>Location</p>
              <p className="content">Kaohsiung, Taiwan</p>
            </div>
          </div>
          <div className="section">
            <div className="iconContainer">
              <Mail className="icon" />
            </div>
            <div className="text">
              <p>Mail</p>
              <p className="content">zxc7199733@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
