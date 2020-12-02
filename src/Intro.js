import React, {useState} from "react";
import profilePic from "./assets/profile-pic.jpg";
import { Row, Col, Image } from "react-bootstrap";
import ContactButtons from "./ContactButtons";


export default function Intro () {

    return (
      <section>
        <div className="anchor" id="home"></div>
        <Row className="justify-content-center align-items-center intro-container">
          <Col className="col-12 col-md-7 order-md-2 text-center text-md-left pb-5 pb-md-0 pt-3 pt-md-0 intro-title-container">
              <h1 className="pb-2">Ana Sofia Caballero</h1>
              <h3>Junior Web and App Developer</h3>
          </Col>
          
          <Col className="col-12 col-md-4 col-lg-5 order-md-1 pb-3 pb-md-0">
            <Image className="photo mx-auto d-block mb-3" src={profilePic} alt="photo of me" roundedCircle/> 
            <div className="col text-center">
              <ContactButtons />
            </div>
          </Col>
        </Row>
      </section>
    )
}