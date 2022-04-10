import React from "react";
import { portfolio } from "../Data/data";
import "./ProjectCard.css"

import Carousel from 'react-bootstrap/Carousel';

function ProjectCard (){
    const mappedPortfolio = portfolio.map((project)=>{
        return (
            <Carousel.Item >
                <img  style={{width: "100%"}}src={require("./Images/mountain.jpg")} alt="moutain"/>
                <Carousel.Caption>
                    <h1>{project.project_name}</h1>
                    <h2>{project.summary}</h2>
                    <h3>{project.tools}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            )
    })
    return(
        <Carousel id="project-carousel">
            {mappedPortfolio}
        </Carousel>
        
    )
}

export default ProjectCard;