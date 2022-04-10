import React from "react";
import { portfolio } from "../Data/data";

import Carousel from 'react-bootstrap/Carousel';

function ProjectCard (){
    const mappedPortfolio = portfolio.map((project)=>{
        return (
            <Carousel.Item >
                <img className="w-100" src={require("./Images/mountain.jpg")} alt="moutain"/>
                <Carousel.Caption>
                    <h1>{project.project_name}</h1>
                    <h1>{project.summary}</h1>
                    <h3>{project.tools}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            )
    })
    return(
        <Carousel>
            {mappedPortfolio}
        </Carousel>
        
    )
}

export default ProjectCard;