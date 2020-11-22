import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
    return (
        <Navbar expand="lg" className="p-0 pb-2">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#link" className="pr-0">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
}