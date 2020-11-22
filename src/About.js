import React from "react";
import { Row, Col} from "react-bootstrap";

export default function About() {

    return (
        <section>
            <div className="title-container">
                <h2>About</h2>
                <div className="separation-line"></div>
            </div>
            <Row className="justify-content-center">
                <Col className="col-12 col-md-5 p-4 lg-mb-0 mb-4 mb-md-0 mr-md-5 about-col">
                    <h4>Hi, I'm Ana,</h4>
                    <p className="pr-3">an autonomous and detail-oriented developer, trained by the WBS Coding School and the Apple Developer Academy.</p>
                    <p className="pr-3">I build clean and responsive interfaces, always seeking to provide the best user experience. I enjoy working in interdisciplinary and intercultural teams and learning something new every single day.</p>
                </Col>
                <Col className="col-12 col-md-5 p-4 about-col">
                    <h4>Technical Skills</h4>
                    <ul>
                        <li>HTML5, CSS3</li>
                        <li>Vanilla JavaScript, React.js</li>
                        <li>Swift, Xcode</li>
                        <li>Node.js, Express</li>
                        <li>Git, GitHub</li>
                        <li>Sketch, Photoshop</li>
                    </ul>
                </Col>
            </Row>
        </section>
    )
}