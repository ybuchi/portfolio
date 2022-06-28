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
            <div id="casual-profile-img"/>

            <h1>About</h1>
        </div>
        {/* </Jumbotron> */}

        <article className="about-article" id="about-personal" style={{textAlign: "left"}}>
            <Container>
                <Row>
                    <Col>
                        <h1  className="section-container" style={{textAlign: "right"}}>Personal Background</h1>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={4}>
                        <div id="bogota" className="country-img">
                            Bogotá, Colombia
                        </div>
                        <div id="levaud" className="country-img">
                            <p>Le Vaud, Switzerland</p>
                        </div>
                        <div id="rye" className="country-img">
                            <p>Rye, New York</p>
                        </div>
                        <div id="queens" className="country-img">
                            <p>Astoria, Queens</p>
                        </div>
                    </Col>
                    <Col className="relative" sm={12} md={8}>
                        <div id="about-txt">
                            <p>Hi! I'm Yannik!</p>
                            <p>I'm a Swiss-American programmer with Colombian roots.</p>
                            <p>I immigrated to the city of Rye, New York in 1997 from the small village of Le Vaud, Switzerland and recently gained American citizenship as of April 2022.</p>
                            <p>Despite growing up in New York, I maintain strong ties to my Swiss-german and francophone roots in the cantons of Vaud and Zürich.</p>
                            <p>I received a formal bilingual education in both French and English and am conversationally fluent in both German and Swiss-German. I'm currently looking to add Italian and Spanish to the list!</p>
                            <p>My favorite activities are perhaps unsurprisingly Swiss in nature and include hiking, skiing, snowboarding... really anything with mountains and snow. In addition, I really enjoy playing the piano and am currently teaching myself how to play the guitar.</p>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </article>

        <article className="about-article" id="about-educational" style={{textAlign: "left"}}>
            <Container>
                <Row>
                    <Col sm={12} md={8}>
                        <h1 className="section-container"> Education </h1>
                        <div className="education-container">
                            <Container>
                                <Row className="education-row">
                                    <Col sm={2}>
                                        <img id="fasny-img" src={require("./Images/FASNY-logo.jpg")} alt="french-american school of new york"/>
                                    </Col>
                                    <Col sm={10}>
                                        <p className="language-label"><strong>French-American School of New York</strong></p>
                                        <p>High School Diploma and Diploma of the French Baccalaureate</p>
                                    </Col>
                                </Row>
                                <Row className="education-row">
                                    <Col sm={2}>
                                        <img id="colby-img" src={require("./Images/colby-college-logo.png")} alt="colby college"/>
                                    </Col>
                                    <Col sm={10}>
                                        <p className="language-label"><strong>Colby College</strong></p>
                                        <p>Bachelor of the Arts : Biology and French Studies double major</p>
                                    </Col>
                                </Row>
                                <Row className="education-row">
                                    <Col sm={2}>
                                        <img id="flatiron-img" src={require("./Images/Flatiron.png")} alt="flatiron school"/>
                                    </Col>
                                    <Col sm={10}>
                                        <p className="language-label"><strong>Flatiron School</strong></p>
                                        <p>Software Engineering Bootcamp - JavaScript, React and Ruby-on-Rails</p>
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="highlight-box">
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
                    </Col>
                </Row>
            </Container>
        </article>

        <article className="about-article" id="about-professional" style={{textAlign: "left"}}>
            <Container>
                <h1  className="section-container" style={{textAlign: "right"}}> Professional Background</h1>
                <p>While I come from a non-traditional background in computer science, I've worked hard to learn and pick up new tools and technologies to constantly improve my programming skills.</p>

                <Row className="skill odd-row">
                    <Col>
                        <img className="excel-img" src={require("./Images/sql.png")} alt="sql"/>
                        <img className="excel-img" src={require("./Images/javascript.png")} alt="javascript"/>
                        <img className="excel-img" src={require("./Images/html.png")} alt="html"/>
                        <img className="excel-img" src={require("./Images/css.png")} alt="css"/>
                        <img className="excel-img" src={require("./Images/react.png")} alt="react"/>
                        <img className="excel-img" src={require("./Images/ruby.png")} alt="ruby"/>
                        <img className="excel-img" src={require("./Images/rails.png")} alt="rails"/>
                    </Col>
                    <Col>
                        <div className="education-container">
                            <p className="language-label"><strong>Software Engineer - 2022</strong></p>
                        </div>
                    </Col>
                </Row>
                <Row className="skill">
                    <Col>
                        <img className="excel-img" src={require("./Images/excel.png")} alt="excel"/>
                        <img className="excel-img" src={require("./Images/sql.png")} alt="sql"/>
                        <img className="excel-img" src={require("./Images/tableau.png")} alt="tableau"/>
                        <img className="excel-img" src={require("./Images/jasper.png")} alt="jasper"/>
                        <img className="excel-img" src={require("./Images/databricks.png")} alt="databricks"/>
                        <img className="excel-img" src={require("./Images/python.png")} alt="python"/>

                    </Col>
                    <Col>
                        <div className="education-container">
                            <p className="language-label"><strong>Data Analyst, Business Intelligence - 2020-2021</strong></p>
                            <p>ITHAKA</p>
                        </div>
                    </Col>
                </Row>
                <Row className="odd-row skill">
                    <Col>
                        <img className="excel-img" src={require("./Images/excel.png")} alt="excel"/>
                        <img className="excel-img" src={require("./Images/sql.png")} alt="sql"/>
                        <img className="excel-img" src={require("./Images/tableau.png")} alt="tableau"/>
                        <img className="excel-img" src={require("./Images/jasper.png")} alt="jasper"/>

                    </Col>
                    <Col>
                        <div className="education-container">
                            <p className="language-label"><strong>Publisher Support Associate, Content Development - 2018-2020</strong></p>
                            <p>ITHAKA</p>
                        </div>
                    </Col>
                </Row>
                <Row className="skill">
                    <Col>
                        <img className="excel-img" src={require("./Images/excel.png")} alt="excel"/>
                    </Col>
                    <Col>
                        <div className="education-container">
                            <p className="language-label"><strong>Education Coordinator - 2018</strong></p>
                            <p>Success Academy Charter Schools</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </article>
        </>
    )
}

export default About;