import React from "react";
import { portfolio } from "../Data/data";
import ProjectCard from "./ProjectCard";
import "./Portfolio.css";
import Carousel from 'react-bootstrap/Carousel';
import ProjectCarousel from "./ProjectCarousel";
import { Container } from "react-bootstrap";

function Portfolio(){

    //List out cards of portfolio project with some filter buttons

    return(
    
        <>
        <Container id="portfolio">
            <h1>Portfolio</h1>
            <ProjectCard />
            <ProjectCarousel />
        </Container>
        
        </>
    )
}

export default Portfolio;