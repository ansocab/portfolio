import React from "react";

import './App.css';
import Navigation from "./Navigation";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import { Container } from "react-bootstrap";


function App() {

  return (
    <div className="App">
        <header><Navigation /></header>
        <Intro />
      <Container>
        <About />
        <Projects />
        <Contact />
      </Container>
        <footer className="d-flex justify-content-center"> {/* Add flex-column here when adding separation line*/}
          {/*<div className="footer-separation-line"></div>*/}
          <div>{`© ${new Date().getFullYear()} Ana Sofia Caballero`}</div>
        </footer>
    </div>
  );
}

export default App;
