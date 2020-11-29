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
      <Container>
        <header><Navigation /></header>
        <Intro />
        <About />
        <Projects />
        <Contact />
        <footer className="d-flex justify-content-center">© 2020 Ana Sofia Caballero</footer>
      </Container>
    </div>
  );
}

export default App;
