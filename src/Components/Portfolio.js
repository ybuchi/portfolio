import React from "react";
import { portfolio } from "../Data/data";
import ProjectCard from "./ProjectCard";
import "./Portfolio.css";
import Carousel from 'react-bootstrap/Carousel';

function Portfolio(){

    //When a user clicks on the card, the populates with the full project details

    return(
        <>
        <h1>Portfolio</h1>
        <ProjectCard />
        </>
    )
}

export default Portfolio;