import React from "react";
import { portfolio } from "../Data/data";
import "./ProjectCard.css"

import Carousel from 'react-bootstrap/Carousel';
import { Button } from "react-bootstrap";


function ProjectCarousel (){
    const mappedPortfolio = portfolio.map((project)=>{
        return (
            <Carousel.Item key={project.id}>
                <img  style={{width: "100%"}}src={require("./Images/Cuisto.png")} alt="moutain"/>
                <Button href={project.project_url} variant="info">Visit Website</Button>
            </Carousel.Item>
            )
    })

    
    return(
        <Carousel variant="dark" id="project-carousel">
            {mappedPortfolio}
        </Carousel>
        
    )
}

export default ProjectCarousel;