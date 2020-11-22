import React from "react";

import './App.css';
import Navigation from "./Navigation";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";

import { Container, Row, Col, Image, Button, ButtonGroup } from "react-bootstrap";


function App() {

  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <Navigation />
        </header>
        <Intro />
        <About />
        <Projects />
      </Container>
    </div>
  );
}

export default App;
