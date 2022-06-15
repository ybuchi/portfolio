import React from "react";
import "./About.css";
import Jumbotron from "./Jumbotron";
import { about } from "../Data/data";
import { Col, Row, Container } from "react-bootstrap";

function About(){
    //Introduction 
    //A table of (hard) skills
    //1. Javascript a.React 2. Ruby 3. SQL 4. Tableau 5. Agile methodolgy and principles

    //A short resumes of places and jobs

    //Restate mission statement with different details details (philosophy)

    return(
        <>
        <Jumbotron>
            <h1>About</h1>
        </Jumbotron>

        <article className="about-article" id="about-personal" style={{textAlign: "left"}}>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <img className="country-logo" src={require("./Images/Colombia.png")} alt="Colombia"></img>
                        <img className="country-logo" src={require("./Images/Switzerland.png")} alt="Colombia"></img>
                        <img className="country-logo" src={require("./Images/USA.png")} alt="Colombia"></img>
                    </Col>
                    <Col sm={12} md={6}>
                        <h1>Personal Background</h1>
                        <p>Hi, I'm Yannik! I was born in Bogotá, Colombia, lived in Vaud, Switzerland for a few years before moving to New York where I have spent most of my life (currently based in Astoria, Queens).</p>
                        <p>Exploring and connecting with new languages and cultures has always been an important part of my life, especially growing up in a Swiss-German household, attending a French school, and living in the diverse state of New York.
                        I undoubtedly get my obsession for moutains, snow, skiing, and hiking from my Swiss side. My flamboyance, energy, and love for music can likely be attributed to my Colombian side, and my passion and unrelenting drive come from my American side (I'm a new US citizen!). As such, I particularly thrive in cross-cultural, open-minded environments.
                        </p>
                    </Col>
                </Row>
            </Container> 
        </article>

        <article className="about-article" id="about-educational" style={{textAlign: "left"}}>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <h1> Educational Background </h1>
                        <div className="education-container">
                            <p>I possess a bilingual high school diploma in French and English with an additional diploma of the French Baccalaureate.</p>
                        </div>
                        <div className="education-container">
                            <p>I received a Bachelor of the Arts degree with a double-major in Biology and French Studies from Colby College.</p>
                        </div>
                        <div className="education-container">
                            <p>I attended and completed the Flatiron School 15 week full-time and in-person coding bootcamp.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <img className="country-logo" src={require("./Images/FASNY-logo.jpg")} alt="FASNY"/>
                        <img className="country-logo" src={require("./Images/colby-college-logo.png")} alt="FASNY"/>
                        <img className="country-logo" src={require("./Images/Flatiron.png")} alt="FASNY"/>


                    </Col>
                </Row>
            </Container>
        </article>

        <article className="about-article" id="about-professional" style={{textAlign: "left"}}>
            <Container>
                <Row>
                    <Col sm={12} md={6}> 
                        <img className="country-logo" src={require("./Images/ithaka.png")} alt="ITHAKA"/>
                        <img className="country-logo" src={require("./Images/SA.png")} alt="Success Academy Charter Schools"/>

                    </Col>
                    <Col sm={12} md={6}>
                        <h1> Professional Background </h1>
                        <p className="summary">A summary here. Explain how you got to software engineering.</p>
                        <div className="professional-container">
                            <p>I started of at SA Charter Schools. </p>
                        </div>
                        <div className="education-container">
                            <p>I then worked at ITHAKA where I began self-teaching myself code.</p>
                        </div>
                        <div className="education-container">
                            <p>I earned a new role as a data analystn through my hard work. Took more coding classes and discovered web development.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            
        </article>
        </>
    )
}

export default About;