import React from "react";
import ContactButtons from "./ContactButtons";
import {Row} from "react-bootstrap";

export default function Contact () {
    return (
        <section>
            <div className="anchor" id="contact"></div>
            <div className="title-container">
                <h2>Contact</h2>
                <div className="separation-line"></div>
            </div>
            <div className="d-flex justify-content-center"><ContactButtons /></div>
            <div className="mt-4 mb-5 d-flex justify-content-center form-container">
                <form name="contact" method="POST" data-netlify="true" content-type="application/x-www-form-urlencoded" className="contact-form">
                    <Row className="d-flex justify-content-center"><input type="text" name="name" placeholder="Name*"></input></Row>
                    <Row className="d-flex justify-content-center"><input type="email" name="email" placeholder="Email*"></input></Row>
                    <Row className="d-flex justify-content-center"><textarea name="message" placeholder="Message*" rows="10"></textarea></Row>
                    <Row className="d-flex justify-content-center"><button type="submit" className="submit-button">Submit</button></Row>
                </form>
            </div>
        </section>
    )
}