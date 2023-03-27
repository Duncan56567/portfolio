import React from "react";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Project } from "../components/Project";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};
