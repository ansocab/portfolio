import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
    return (
        <Navbar bg="white" expand="lg" fixed="top" className="top-navigation pr-0">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto pl-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact" className="pr-0">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}