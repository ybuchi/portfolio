import React from "react";
import "./ProjectCarousel.css";
import {Container, Col, Row} from "react-bootstrap"
import { Button } from "react-bootstrap";

function ProjectCard({ project }){
    console.log("project", project)

    return(
        <Col sm={12} md={4}>
            <Container className="project-card">
                <Row className="project-header">
                    <h2>{project.project_name}</h2>
                    <img src={require(`${project.image}`)} alt="project"/>
                </Row>
                <Row>
                    <p>
                        {project.description}
                    </p>
                    
                    
                </Row>
                <Button variant="success">View Deployed App</Button>
                <Button variant="secondary">GitHub</Button>
            </Container>
        </Col>
        
    )
}

export default ProjectCard;