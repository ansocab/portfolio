import React, {useState, useEffect} from "react";
import { Row, Col, Nav } from "react-bootstrap";
import {portfolio} from "./projectList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);

      useEffect(() => {
        setProjects(portfolio);
      }, []);

      useEffect(() => {
        setProjects([]);
        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
        console.log(projects);
      }, [filter]);


    return (
        <section>
        <div className="anchor" id="projects"></div>
        <div className="title-container">
                <h2>Projects</h2>
                <div className="separation-line"></div>
        </div>
        <Row className="projects-navigation-row">
            <Nav className="m-auto align-items-center projects-navigation" defaultActiveKey="all" onSelect={(selectedKey) => setFilter(selectedKey)}>
                <Nav.Item>
                    <Nav.Link eventKey="all">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="web">Web</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="mobile">Mobile</Nav.Link>
                </Nav.Item>
            </Nav>
        </Row>

        <div>
            {projects.map((item, i) => item.filtered === true ? (
                <Row key={item.name} className="justify-content-around align-items-center mb-5 ml-md-auto mr-md-auto project-container">
                <Col className="col-12 col-md-6 order-md-2 text-md-left pb-4 pb-md-0 pt-3 pt-md-0 intro-title-container info-col">
                    <div className="project-title-section">
                        {item.logo ? 
                        <img className="logo-image mr-3" src={require(`./assets/${item.logo}`).default} alt={`${item.name} logo`}/>
                        : ""}
                        <h4>{item.name}</h4>
                    </div>
                    <div className="pt-2">{item.description.split("\n").map((item, key) => {return <p key={key}>{item}<br/></p>})}</div>
                    <p className="built-with-paragraph">Built with:</p>
                    <ul>{item.technologies?.map((item, key) => {return <li key={key}>{item}</li>})}</ul>
                    <span>
                        <span className="d-flex justify-content-center justify-content-md-start">
                            {item.repositoryURL ? <a href={item.repositoryURL} target="_blank" rel="noreferrer"><span className="pr-5"><FontAwesomeIcon icon={faGithub} className="mr-2"/>Repository</span></a> : "" }
                            {item.liveURL ? <a href={item.liveURL} target="_blank" rel="noreferrer"><span><FontAwesomeIcon icon={faGlobe} className="mr-2"/>Live</span></a> : "" }
                            {item.appStoreURL ? <a href={item.appStoreURL} target="_blank" rel="noreferrer" className="appstore-link"><img src={require("./assets/app-store-download.png").default} alt="Download on the App Store" className="mr-2"/></a> : "" }
                        </span>
                    </span>
                </Col>

                <Col className="col-12 col-md-5 order-md-1 pb-3 pb-md-0">
                  {item.screenshots?.length ? <img className={item.category.includes("web") ? "screenshot-web" : "screenshot-mobile"} src={require(`./assets/${item.screenshots[0]}`).default} alt={`${item.name} screenshot`}/> : ""}
                </Col>
              </Row>
            ) : '')}
        </div>
        </section>
    )
}