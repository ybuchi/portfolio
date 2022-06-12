import React from "react";
import "./ProjectCarousel.css";
import {Container, Col, Row} from "react-bootstrap"

function ProjectCarousel(){
    return(
        <Container className="project-card">
            <Row className="project-header">
                <h2>Project Name</h2>
                <div className="project-image">

                </div>
            </Row>
            <Row>
                <p>Project Description</p>
            </Row>
        </Container>
        
    )
}

export default ProjectCarousel;