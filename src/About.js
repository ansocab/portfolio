import React from "react";
import { Row, Col} from "react-bootstrap";

export default function About() {

    return (
        <section>
            <div className="anchor" id="about"></div>
            <div className="title-container">
                <h2>About</h2>
                <div className="separation-line"></div>
            </div>
            <Row className="justify-content-between">
                <Col className="col-12 col-md-6 lg-mb-0 mb-4 mb-md-0 pl-0 pr-0 about-col">
                    <div className="p-4 mr-md-4">
                    <h4>Hi, I'm Ana,</h4>
                    <p className="pr-3">an autonomous and detail-oriented developer, trained by the WBS Coding School and the Apple Developer Academy.</p>
                    <p className="pr-3 mb-0">I build clean and responsive interfaces, always seeking to provide the best user experience. I enjoy working in interdisciplinary and intercultural teams and learning something new every single day.</p>
                    </div>
                </Col>
                <Col className="col-12 col-md-6 pl-0 pr-0 about-col">
                    <div className="p-4 ml-md-4">
                    <h4>Technical Skills</h4>
                    <ul>
                        <li>React.js, Vanilla JavaScript</li>
                        <li>HTML5, CSS3</li>    {/*If focus on Full Stack: HTML below Git*/}
                        <li>Node.js, Express</li>   
                        <li>Git, GitHub</li>
                        <li>Sketch</li>
                        <li>Swift, Xcode</li>
                    </ul>
                    </div>
                </Col>
            </Row>
        </section>
    )
}