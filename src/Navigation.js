import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  //const [scrollY, setScrollY] = useState(0);
  const [showName, setShowName] = useState(false);

  function logit() {
    const scrollY = window.pageYOffset;
    if (scrollY <= 125) {
      setShowName(false)
    } else {
      setShowName(true)
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  console.log(showName)

    return (
        <Navbar bg="none" expand="lg" variant="dark" fixed="top" className="top-navigation">
          <Navbar.Brand href="#home" className={`${showName ? "" : "noScroll"} brand-name`}>Ana Sofia Caballero</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-2">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}