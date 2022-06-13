import React from "react";
import { mission, work_tools, work } from "../Data/data";
import "./Home.css";
import "./Images/mountain.jpg"
import Jumbotron from "./Jumbotron";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home(){

    const jumboStyle = {backgroundColor: "#19282F", color: "#A1B57D", position: "relative"};
    const backgroundImage = ""

    function handleScrollToSection(e){
        const elementId = e.target.value
        document.getElementById(elementId).scrollIntoView()
    }
    

    return(
        <>
        {/* <img id="logo" src={require("./Images/logo_cropped.png")} alt="Yannik's logo" />*/}

            <Jumbotron jumboStyle={jumboStyle} backgroundImage={backgroundImage}>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col md={12} style={{textAlign: "center"}}>
                                    <div>
                                        <span>Hi! Bonjour! Grüezi!</span><br/>
                                        <span id="my-name-is">I'm </span>
                                        <span id="yannik">YANNIK, </span>
                                        <span id="i-am-a">a(n) </span>
                                        <div id="adjectives" className="content" style={{textAlign: "center"}}>
                                            <div className="content_container">
                                                <ul className="content__container__list">
                                                    <li className="content__container__list__item" style={{color: "#B33030", fontSize: "40px"}}>
                                                        mission-driven
                                                    </li>
                                                    <li className="content__container__list__item" style={{color: "#B33030", fontSize: "40px"}}>
                                                        environmental
                                                    </li>
                                                    <li className="content__container__list__item" style={{color: "#B33030", fontSize: "40px"}}>
                                                        full-stack
                                                    </li>
                                                    <li className="content__container__list__item" style={{color: "#B33030", fontSize: "40px"}}>
                                                        really cool
                                                    </li>
                                                </ul>
                                            </div>
                                            <span id="software-engineer" style={{textAlign: "center"}}>software engineer</span> 
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/* Profile Pic */}
                </Container>   
                <img id="profile-pic" src={require("./Images/SemiProfessionalPic.jpg")} alt="Yannik"/>     
            </Jumbotron>

            <article className="recent-projects">
                <h2>Recent Projects</h2>
                <Container>
                    <Row>
                        <Col className="recent-project" id="first-recent-project" sm={12} md={6}>
                            <h2 id="first-proj-label">Cuisto (in progress)</h2>
                        </Col>
                        <Col className="recent-project" id="second-recent-project" sm={12} md={6}>
                            <h2 id="second-proj-label">Cuisto (in progress)</h2>
                        </Col>
                    </Row>
                </Container>
            </article>

            {/* Navigations to Mission, How I work and Tools */}
            <div id="page-nav-btn-container">
                <Button className="page-nav-btn" 
                        variant="light"
                        value="mission"
                        onClick={handleScrollToSection}>
                        Mission
                </Button>
                <Button className="page-nav-btn" 
                        variant="light"
                        value="work"
                        onClick={handleScrollToSection}>
                        Work
                </Button>
                <Button className="page-nav-btn" 
                        variant="light"
                        value="tools"
                        onClick={handleScrollToSection}>
                        Tools
                </Button>
                <Button className="page-nav-btn" 
                        variant="light"
                        value="All Projects"
                        onClick={handleScrollToSection}>
                        All Projects
                </Button>
            </div>
            
            <div className="page-text-container">
                <Container>
                    <Row>
                        <Col sm={12} md={6} id="mission-col-container" className="col-container">
                            <h1 className="page-section-header" id="mission">Mission-Driven</h1>
                            <p className="page-text-p">{mission.paragraph}</p>
                            <p className="page-text-p">{mission.paragraph2}</p>
                            <p className="page-text-p">{mission.paragraph3}</p>
                        </Col>
                        <Col style={{position: "relative"}} sm={12} md={6}>
                            <h3 className="page-text-q">{mission.quote}</h3>
                        </Col>
                    </Row>   
                </Container> 
            </div>
            
            <div className="page-text-container">
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            
                        </Col>
                        <Col sm={12} md={6} id="work-col-container" className="col-container">
                            <h1 className="page-section-header" id="work">Curious & Ambitious</h1>
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
                        <Col sm={12} md={6} id="tools-col-container" className="col-container">
                            <h1 className="page-section-header" id="tools">Open-Minded Team Player</h1>
                            <p className="page-text-p">{work_tools.paragraph1}</p>
                            <p className="page-text-p">{work_tools.paragraph2}</p>
                            <p className="page-text-p">{work_tools.paragraph3}</p>
                        </Col>
                        <Col sm={12} md={6}>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Home;