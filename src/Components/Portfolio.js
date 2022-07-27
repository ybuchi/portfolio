import React from "react";
import { portfolio } from "../Data/data";
import ProjectCard from "./ProjectCard";
import "./Portfolio.css";
import { Container, Row, Col} from "react-bootstrap";

function Portfolio(){

    //List out cards of portfolio project with some filter buttons
    const mappedPortfolioCards = portfolio.map((project, index)=>{
        return(
            <ProjectCard key={index} project={project}/>
        )
    })

    return(
        <>
            <Container id="portfolio">
                <h1 id="portfolio-title">Portfolio</h1>
                <h4>Check out my past and current projects!</h4>
                <h6>Stay tuned! More updates, projects and info will be updated regularly.</h6>
                <Row>
                    {mappedPortfolioCards}
                </Row>
                
            </Container>
        </>
    )
}

export default Portfolio;