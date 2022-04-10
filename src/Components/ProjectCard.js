import React from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

function ProjectCard ({ project }){
    return(
        <Col>
            <Card>
                <Card.Img variant="top" src={require("./Images/mountain.jpg")}/>
                <Card.Header>
                    {project.project_name}
                </Card.Header>
                <Card.Text>
                    {project.summary}
                    <br/>
                    {project.tools}
                </Card.Text>
            </Card>
        </Col>
        
    )
}

export default ProjectCard;