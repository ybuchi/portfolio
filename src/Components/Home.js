import React from "react";
import { mission, work_tools, work } from "../Data/data";
import "./Home.css";
import { Link } from "react-router-dom";
import "./Images/mountain.jpg"
import Jumbotron from "./Jumbotron";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home(){

    const jumboStyle = {backgroundColor: "#19282F", color: "white", position: "relative", paddingTop: "50px"};
    const backgroundImage = ""

    function handleScrollToSection(e){
        const elementId = e.target.value
        document.getElementById(elementId).scrollIntoView()
    }
    

    return(
        <>
        {/* <img id="logo" src={require("./Images/logo_cropped.png")} alt="Yannik's logo" />*/}

            <Jumbotron id="home-jumbo" jumboStyle={jumboStyle} backgroundImage={backgroundImage}>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col md={12} style={{textAlign: "center"}}>
                                    <div>
                                        {/* <span className="greetings">Hi! Bonjour! Grüezi!</span><br/> */}
                                        {/* <span id="my-name-is">I'm </span><br/> */}
                                        <span id="yannik">YANNIK BÜCHI</span><br/>
                                        {/* <span id="i-am-a">a </span><br/> */}
                                        <div id="adjectives" className="content" style={{textAlign: "center"}}>
                                            <div className="content_container">
                                                <ul className="content__container__list">
                                                    <li className="content__container__list__item" style={{color: "lightblue", fontSize: "40px"}}>
                                                        Mission-driven
                                                    </li>
                                                    <li className="content__container__list__item" style={{color: "lightblue", fontSize: "40px"}}>
                                                        Bilingual
                                                    </li>
                                                    <li className="content__container__list__item" style={{color: "lightblue", fontSize: "40px"}}>
                                                        Fullstack
                                                    </li>
                                                    <li className="content__container__list__item" style={{color: "lightblue", fontSize: "40px"}}>
                                                        Chocolate-loving
                                                    </li>
                                                </ul>
                                            </div>
                                            <span id="software-engineer" style={{textAlign: "center", color: "white"}}>Software Engineer</span> 
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
                            {/* <h2 id="first-proj-label">Cuisto (in progress)</h2> */}
                        </Col>
                        <Col className="recent-project" id="second-recent-project" sm={12} md={6}>
                            {/* <h2 id="second-proj-label">Cuisto (in progress)</h2> */}
                        </Col>
                    </Row>
                </Container>
                <Button className="page-nav-btn" 
                        variant="light"
                        value="All Projects"
                        >
                        <Link to="/portfolio">Go to Portfolio</Link>
                </Button>
            </article>

            {/* Navigations to Mission, How I work and Tools */}
            <div id="page-nav-btn-container">
                <Button className="page-nav-btn" 
                        variant="light"
                        value="mission"
                        onClick={handleScrollToSection}>
                        Mission-Driven
                </Button>
                <Button className="page-nav-btn" 
                        variant="light"
                        value="work"
                        onClick={handleScrollToSection}>
                        Curious and Ambitious
                </Button>
                <Button className="page-nav-btn" 
                        variant="light"
                        value="tools"
                        onClick={handleScrollToSection}>
                        Open-Minded
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