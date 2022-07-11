import React from "react";
import {Container, Col, Row} from "react-bootstrap"
import "./ProjectCard.css"
import { Button } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import { BoxArrowUpRight } from "react-bootstrap-icons";

function ProjectCard({ project }){
    console.log("project", project)

    return(
        <Col sm={12}>
            <Container className="project-card">
                
                <Row className="project-header">
                    <img className="project-logo" src={require(`${project.image}`)} alt="project"/>
                </Row>
                <a href={project.github_url} target="_blank" rel="noreferrer"><Github size={35} className="proj-link" /></a>
                <a href={project.project_url} target="_blank" rel="noreferrer"><BoxArrowUpRight size={30} className="proj-link"/></a>
                <Row>
                    <p>
                        {project.description}
                    </p>
                </Row>
                <Row>
                    <p>
                        {project.summary}
                    </p>
                </Row>
                
            </Container>
        </Col>
        
    )
}

export default ProjectCard;