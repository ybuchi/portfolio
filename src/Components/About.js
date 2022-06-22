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
    let frenchWidth = 1;
    let frenchElem = document.getElementById("french")

    function increaseWidth(languageWidth, elem){
        let id = setInterval(addOne, 10);
        function addOne(){

            if(languageWidth >= 100){
                clearInterval(id)
            }else{
                languageWidth++;
                elem.style.width = languageWidth + "%";
            } 

           
        }
        
    }

    increaseWidth(frenchWidth, frenchElem);

    return(
        <>
        {/* <Jumbotron id="about-jumbo"> */}
        <div id="about-jumbo">
            <h1>About</h1>
        </div>
        {/* </Jumbotron> */}

        <article className="about-article" id="about-personal" style={{textAlign: "left"}}>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{textAlign: "right"}}>Personal Background</h1>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={4}>
                        <div id="bogota" className="country-img">
                        </div>
                        <div id="levaud" className="country-img">
                        </div>
                        <div id="rye" className="country-img" style={{textAlign: "center"}}>
                        </div>
                        <div id="queens" className="country-img">
                        </div>
                    </Col>
                    <Col sm={12} md={8}>
                        <p>Hi! I'm Yannik!</p>
                        <p>I'm a Swiss-American programmer originally from Vaud, Switzerland and currently based in Queens, New York.</p>
                        <p>Our strong ties to our Swiss family roots in Vaud and Zürich meant living and thriving in a multilingual household speaking French, Swiss-German and English.</p>
                        <p>Perhaps unsurprisingly, my favorite activities include hiking, skiing, snowboarding... I guess you could say that simply being in the mountains makes me happy.</p>
                        <p>Playing and listening to music are also part of my favorite passtimes. I've been playing the piano since the age of 7, and have recently picked up the guitar.</p>
                    </Col>
                </Row>
            </Container> 
        </article>

        <article className="about-article" id="about-educational" style={{textAlign: "left"}}>
            <Container>
                <Row>
                    <h1> Educational Background </h1>
                </Row>
                <Row>
                    <Col sm={12} md={8}>
                        
                        <div className="education-container">
                            <p className="language-label"><strong>French-American School of New York</strong></p>
                            <p>High School Diploma and Diploma of the French Baccalaureate</p>
                        </div>
                        <div className="education-container">
                            <p className="language-label"><strong>Colby College</strong></p>
                            <p>Bachelor of the Arts : Biology and French Studies double major</p>
                        </div>
                        <div className="education-container">
                            <p className="language-label"><strong>Flatiron School</strong></p>
                            <p>Software Engineering Bootcamp : JavaScript, React and Ruby-on-Rails</p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <h3 style={{textAlign: "center"}}>Languages</h3>
                        <p className="language-label">French (Native Speaker)</p>
                        <div className="language-bar">
                            <div className="" id="french">
                            </div>
                        </div>
                        <p className="language-label">English (Native Speaker)</p>
                        <div className="language-bar">
                            <div id="english">
                            </div>
                        </div>
                        <p className="language-label">German (Conversationally Fluent)</p>
                        <div className="language-bar">
                            <div id="german" style={{width: "70%"}}>
                            </div>
                        </div>

                        {/* <div style={{textAlign: "center"}}>
                            <img className="country-logo" src={require("./Images/FASNY-logo.jpg")} alt="FASNY"/>
                        </div>
                        <br/>
                        <div style={{textAlign: "center"}}>
                            <img className="country-logo" src={require("./Images/colby-college-logo.png")} alt="FASNY"/>
                        </div>

                        <br/>
                        <div style={{textAlign: "center"}}>
                            <img className="country-logo" src={require("./Images/Flatiron.png")} alt="FASNY"/>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </article>

        <article className="about-article" id="about-professional" style={{textAlign: "left"}}>
            <Container>
                <h1 style={{textAlign: "right"}}> Professional Background</h1>
                <Row>
                    <Col>
                        Excel
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="education-container">
                            <p className="language-label"><strong>Education Coordinator</strong></p>
                            <p>Success Academy Charter Schools</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Excel, SQL, Tableau, JasperReports, Redshift
                    </Col>
                    <Col>
                        <div className="education-container">
                            <p className="language-label"><strong>Publisher Support Associate, Content Development</strong></p>
                            <p>ITHAKA</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Excel, SQL, Tableau, JasperReports, Python, Databricks, Redshift, Apache Hive
                    </Col>
                    <Col>
                        <div className="education-container">
                            <p className="language-label"><strong>Data Analyst, Business Intelligence</strong></p>
                            <p>ITHAKA</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        JavaScript, Python, HTML, CSS, React, Node.js, MongoDB, SQL, Express, Ruby, Rails
                    </Col>
                    <Col>
                        <div className="education-container">
                            <p><strong>Software Engineer</strong></p>
                        </div>
                    </Col>
                </Row>
            </Container>

            
        </article>
        </>
    )
}

export default About;