import React from "react";
import { portfolio } from "../Data/data";
import ProjectCard from "./ProjectCard";
import Container from 'react-bootstrap/Container';
import "./Portfolio.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Portfolio(){

    //When a user clicks on the card, the populates with the full project details

    // Map array of projects
    const mappedPortfolio = portfolio.map((project)=>{
        return <ProjectCard project={project}/>
    })

    return(
        <>
        <h1>Portfolio</h1>
        <Container id="portfolio-container">
            <Row xs={1} sm={1} md={2} lg={4}>
                {mappedPortfolio}
            </Row>
        </Container>
        </>
    )
}

export default Portfolio;