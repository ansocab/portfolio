import React, {useState, useEffect} from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { Link, Switch, Route } from "react-router-dom";
import {portfolio} from "./projectList";

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
        <div className="title-container">
                <h2>Projects</h2>
                <div className="separation-line"></div>
            </div>
        <Row className="mt-3 mb-3">
            <Nav className="m-auto" activeKey="all" onSelect={(selectedKey) => setFilter(selectedKey)}>
                <Nav.Item>
                    <Nav.Link eventKey="all">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="web">Web</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="ios">iOS</Nav.Link>
                </Nav.Item>
            </Nav>
        </Row>
        <div>
            {projects.map((item, i) => item.filtered === true ? (
                <Row key={item.name} className={`pb-5 project-row ${i % 2 === 0 && "flex-row-reverse"}`}>
                    <Col className="pt-3 info-col"> 
                        <div>
                            <span>
                                {item.logo ? 
                                <img className="logo-image mr-2" src={require(`./assets/${item.logo}`).default} alt={`${item.name} logo`}/>
                                : ""}
                            </span>
                            <span>{item.name}</span>
                        </div>
                                <p className="pt-3">{item.description.split("\n").map((item, key) => {return <p key={key}>{item}<br/></p>})}
                        </p>
                        <a href={item.url}>{item.callToAction}</a>
                    </Col>
                    <Col> {item.screenshots?.length ? <img className="screenshot-image" src={require(`./assets/${item.screenshots[0]}`).default} alt={`${item.name} screenshot`}/> : ""}
                    </Col>
                </Row>
            ) : '')}
        </div>
        </section>
    )
}