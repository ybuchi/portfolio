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
            {/* //Profile Picture */}
            <div id="casual-profile-img"/>
            <p style={{color: "white"}}>A little bit more about who I am outside of work!</p>

            <Container>
                <Row className="about-container">
                    <Col>
                        <h4><span style={{fontWeight: "bold"}}>3</span> Languages</h4>
                        <Container>
                            <Row className="language-box">
                                <Col>
                                    <img className="icon2" src={require("./Images/France.png")} alt="french"/>
                                    <p className="about-list">French</p>
                                </Col>
                                <Col>
                                    <img className="icon2" src={require("./Images/UK.png")} alt="english"/>
                                    <p className="about-list">English</p>
                                </Col>
                                <Col>
                                    <img className="icon2" src={require("./Images/DE.png")} alt="german"/>
                                    <p className="about-list">German</p>
                                </Col>
                            </Row>
                            
                        </Container>
                    </Col>
                    <Col>
                        <h4><span style={{fontWeight: "bold"}}>2</span> Nationalities</h4>
                        <Container>
                            <Row>
                                <Col><img className="icon" src={require("./Images/Switzerland.png")} alt="switzerland"/></Col>
                                <Col><img className="icon" src={require("./Images/USA.png")} alt="United States"/></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="about-container">
                    <Col style={{backgroundColor: "black", color: "White"}}>
                        <h4><span>Activities</span></h4>
                        <Container >
                            <Row >
                                <Col>
                                    <img className="icon2" src={require("./Images/coding.png")} alt="coding" />
                                    <p className="about-list">Coding</p>
                                </Col>
                                <Col>
                                    <img className="icon2" src={require("./Images/skiing.png")} alt="skiing"/>
                                    <p className="about-list">Skiing</p>
                                </Col>
                                <Col>
                                    <img className="icon2" src={require("./Images/snowboarding.png")} alt="snowboarding"/>
                                    <p className="about-list">Snowboarding</p>
                                </Col>
                                <Col>
                                    <img className="icon2" src={require("./Images/hiking.png")} alt="hiking"/>
                                    <p className="about-list">Hiking</p>
                                </Col>
                                <Col>
                                    <img className="icon2" src={require("./Images/piano.png")} alt="hiking"/>
                                    <p className="about-list">Piano</p>
                                </Col>
                                <Col>
                                    <img className="icon2" src={require("./Images/guitar.png")} alt="hiking"/>
                                    <p className="about-list">Guitar</p>
                                </Col>
                                <Col>
                                    <img className="icon2" src={require("./Images/soccer.png")} alt="hiking"/>
                                    <p className="about-list">Soccer</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

        </div>
        </>
    )
}

export default About;