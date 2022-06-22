import React from "react";
import "./ProjectCarousel.css";
import {Container, Col, Row} from "react-bootstrap"
import { Button } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import { BoxArrowUpRight } from "react-bootstrap-icons";

function ProjectCard({ project }){
    console.log("project", project)

    return(
        <Col sm={12} md={6}>
            <Container className="project-card">
                <Row style={{backgroundColor: "lightgray", padding: "10px", borderRadius: "5px"}}>
                    <Col sm={4} style={{textAlign: "left"}}>
                        <a href={project.github_url} target="_blank" rel="noreferrer"><Github size={35} className="proj-link" /></a>
                    </Col>
                    <Col style={{textAlign: "center"}} sm={4}><h1>{project.project_name}</h1></Col>
                    <Col style={{textAlign: "right"}} sm={4}>
                        <a href={project.project_url} target="_blank" rel="noreferrer"><BoxArrowUpRight size={30} className="proj-link"/></a>
                    </Col>
                </Row>
                <Row className="project-header">
                    <img className="project-logo" src={require(`${project.image}`)} alt="project"/>
                </Row>
                <Row>
                    <p>
                        {project.description}
                    </p>
                    
                    
                </Row>
            </Container>
        </Col>
        
    )
}

export default ProjectCard;