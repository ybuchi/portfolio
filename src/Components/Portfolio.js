import React from "react";
import { portfolio } from "../Data/data";
import ProjectCard from "./ProjectCard";
import "./Portfolio.css";
import Carousel from 'react-bootstrap/Carousel';
import ProjectCarousel from "./ProjectCarousel";
import { Container, Row, Col} from "react-bootstrap";

function Portfolio(){

    //List out cards of portfolio project with some filter buttons
    const mappedPortfolioCards = portfolio.map((project)=>{
        return(
            <ProjectCard key={project.id} project={project}/>
        )
    })

    return(
    
        <>
        <Container id="portfolio">
            <h1 id="portfolio-title">My Portfolio</h1>
            <h4>Check out my past and current projects!</h4>
            <h6>More Coming Soon...</h6>
            <Row>
                <ProjectCarousel />
            </Row>
            <Row>
                {mappedPortfolioCards}
            </Row>
            
        </Container>
        
        </>
    )
}

export default Portfolio;