import React from "react";
import { portfolio } from "../Data/data";
import ProjectCard from "./ProjectCard";
import "./Portfolio.css";
import Carousel from 'react-bootstrap/Carousel';

function Portfolio(){

    //List out cards of portfolio project with some filter buttons

    return(
        <>
        <h1>Portfolio</h1>
        <ProjectCard />
        </>
    )
}

export default Portfolio;