import React from "react";
import {Container, Col, Row} from "react-bootstrap"
import "./ProjectCard.css"
import { Button } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import { BoxArrowUpRight } from "react-bootstrap-icons";

function ProjectCard({ project }){
    const mappedTools = project.tools.map((tool, index) => {
        switch(tool){
            case "JavaScript":
                return(
                    <>
                    <div key={index} className="tool" style={{display: "inline-block"}}>
                        <img className="small-icon" src={require("./Images/javascript.png")} alt="javascript" />
                        <p>{tool}</p>
                    </div>
                    </>
                )
                
            case "React":
                return(
                    
                    <div key={index} className="tool" style={{display: "inline-block"}}>
                        <img className="small-icon" src={require("./Images/react2.png")} alt="react" />
                        <p>{tool}</p>
                    </div>

                )
            
            case "Ruby":
            return(
                
                <div key={index}  className="tool" style={{display: "inline-block"}}>
                    <img className="small-icon" src={require("./Images/ruby.png")} alt="react" />
                    <p>{tool}</p>
                </div>

                )
            case "Rails":
                return(
                    
                    <div key={index} className="tool" style={{display: "inline-block"}}>
                        <img className="small-icon" src={require("./Images/rails.png")} alt="react" />
                        <p>{tool}</p>
                    </div>
    
                )
            case "PostgreSQL":
                return(
                    <div key={index} className="tool" style={{display: "inline-block"}}>
                        <img className="small-icon" src={require("./Images/Postgres.png")} alt="react" />
                        <p>{tool}</p>
                    </div>   
                )
            
            default:
                return(
                <p key={index} style={{display: "inline-block"}}> 
                    {tool}
                </p>
                )
        }
    })

    return(
        <Col sm={12}>
            <Container className="project-card">
                
                <Row className="project-header">
                    <img className="project-logo" src={require(`${project.image}`)} alt="project"/>
                </Row>
                <div style={{marginBottom: "20px"}}>
                    <a href={project.github_url} target="_blank" rel="noreferrer"><Github size={35} className="proj-link" /></a>
                    <a href={project.project_url} target="_blank" rel="noreferrer"><BoxArrowUpRight size={30} className="proj-link"/></a>
                </div>
                
                <div className="text">
                    <Row>
                        <p className="short-descr">
                            {project.description}
                        </p>
                    </Row>
                    <Row>
                        <p className="long-descr">
                            {project.summary}
                        </p>
                    </Row>
                    <hr></hr>
                    <Row>
                        <div className="long-descr">
                            <h5>Featured Technologies:</h5>
                            {mappedTools}
                        </div>
                    </Row>
                </div>
                
            </Container>
        </Col>
        
    )
}

export default ProjectCard;