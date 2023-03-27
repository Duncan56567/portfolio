import React from "react";
import "../styles/Nav/nav.css";
import { Link } from "react-router-dom";

// export const Navbar = () => {
function Navbar() {
  const goTop = () => {
    window.scrollTo({
      top: (0, 0),
    });
  };
  return (
    <nav className="navbar">
      <Link>
        <p className="navName" onClick={goTop}>
          Duncan
        </p>
      </Link>

      <ul className="navList">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
