import React, {useState} from "react";
import profilePic from "./assets/profile-pic.jpg";
import { Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';


export default function Intro () {

    return (
        <Row className="justify-content-center align-items-center intro-container pt-5 pb-5">
          <Col className="col-12 col-md-7 order-md-2 text-center text-md-left pb-5 pb-md-0 intro-title-container">
              <h1 className="pb-2">Ana Caballero</h1>
              <h3>Junior Web and App Developer</h3>
          </Col>
          <Col className="col-12 col-md-4 col-lg-5 order-md-1">
            <Image className="photo mx-auto d-block" src={profilePic} alt="photo of me" roundedCircle/> 
            <div className="col text-center">
              <div className="justify-content-md-center intro-button-icons mt-3">
                <button><FontAwesomeIcon icon={faGithub} /></button>
                <button><FontAwesomeIcon icon={faLinkedinIn} /></button>
                <button><FontAwesomeIcon icon={faEnvelope} /></button>
              </div>
            </div>
          </Col>
        </Row>
    )
}