import React, { useState } from "react";
import { mission, work_tools, work } from "../Data/data";
import "./Home.css";
import "./Images/mountain.jpg"
import Jumbotron from "./Jumbotron";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// What do we want on our home page?
// Introductory Jumbotron
// Small About
// Overall Mission
// How I work
// Visualization of tools used (SQL, Python, Javascript, MERN, Ruby, Ruby on Rails, Express, MongoDB)


function Home(){

    // Introductory Jumbotron (that includes small about?)
    // Overall mission
    // How I work
    // Tools I use

    const jumboStyle = {backgroundColor: "black", color: "white", position: "relative"};

    function handleScrollToSection(e){
        const elementId = e.target.value
        document.getElementById(elementId).scrollIntoView()
    }
    

    return(
        // Have the "Hi, Bonjour, Hallo" placed horizontally from each other and some animation that boldens each of them one at a time
        <>

            <Jumbotron jumboStyle={jumboStyle}>
                <Container>
                    <Row>
                        <Col  sm={12} md={6}>
                            <div className="relative">
                            <div id="greetings" className="content">
                                <div className="content_container" style={{textAlign: "center"}}>
                                    <ul  className="content__container__list" style={{animationDelay: "1s"}}>
                                        <li >Hi!</li>
                                        <li className="content__container__list__item">Bonjour!</li>
                                        <li className="content__container__list__item">Hallo!</li>
                                        <li className="content__container__list__item">
                                            <img id="logo" src={require("./Images/logo_cropped.png")} alt="Yannik's logo" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </Col>
                        <Col className="relative" sm={12} md={6}>
                            <Row>
                                <Col style={{position:"relative"}} md={12}>
                                    <div className="absolute" id="my-name-is">I'm</div>
                                    <div className="absolute" id="yannik">YANNIK</div>
                                    <div className="absolute" id="i-am-a">I am a</div>
                                </Col>
                                <Col style={{position:"relative"}} md={12}>
                                    <div id="adjectives" className="content">
                                        <div className="content_container" style={{width: "400px"}}>
                                                <ul className="content__container__list">
                                                    <li className="content__container__list__item">
                                                        mission-driven
                                                    </li>
                                                    <li className="content__container__list__item">
                                                        environmental
                                                    </li>
                                                    <li className="content__container__list__item">
                                                        full-stack
                                                    </li>
                                                    <li className="content__container__list__item">
                                                        really cool
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    <div className="absolute" id="software-engineer">software engineer</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>        
            </Jumbotron>

            <div className="recent-projects">
                <h2>Recent Projects</h2>
                <Container>
                    <Row>
                        <Col className="recent-project" id="first-recent-project" sm={12} md={6}>
                            <h2 id="first-proj-label">Cuisto (in progress)</h2>
                        </Col>
                        <Col className="recent-project" id="second-recent-project" sm={12} md={6}>
                            <div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Navigations to Mission, How I work and Tools */}
            <div id="page-nav-btn-container">
                <Button className="page-nav-btn" 
                        variant="info"
                        value="mission"
                        onClick={handleScrollToSection}>
                        Mission
                </Button>
                <Button className="page-nav-btn" 
                        variant="info"
                        value="work"
                        onClick={handleScrollToSection}>
                        Work
                </Button>
                <Button className="page-nav-btn" 
                        variant="info"
                        value="tools"
                        onClick={handleScrollToSection}>
                        Tools
                </Button>
                <Button className="page-nav-btn" 
                        variant="info"
                        value="All Projects"
                        onClick={handleScrollToSection}>
                        All Projects
                </Button>
            </div>
            
            <div className="page-text-container">
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <h1 className="page-section-header"id="mission">Mission</h1>
                            <h3 className="page-text-q">{mission.quote}</h3>
                        </Col>
                        <Col sm={12} md={6}>
                            <p className="page-text-p">{mission.paragraph}</p>
                        </Col>
                    </Row>   
                </Container> 
            </div>
            
            <div className="page-text-container">
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <h1 className="page-section-header" id="work">Work</h1>
                        </Col>
                        <Col sm={12} md={6}>
                            <p className="page-text-p">{work.paragraph1}</p>
                            <p className="page-text-p">{work.paragraph2}</p>
                            <p className="page-text-p">{work.paragraph3}</p>
                            <p className="page-text-p">{work.paragraph4}</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <div className="page-text-container">
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <h1 className="page-section-header" id="tools">Tools</h1>
                        </Col>
                        <Col sm={12} md={6}>
                            <p className="page-text-p">{work_tools.paragraph1}</p>
                            <p className="page-text-p">{work_tools.paragraph2}</p>
                            <p className="page-text-p">{work_tools.paragraph3}</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Home;