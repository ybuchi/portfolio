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
import { useNavigate } from "react-router-dom";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Home(){
    const navigate = useNavigate();
    const jumboStyle = {backgroundColor: "#19282F", color: "white", position: "relative", paddingTop: "50px"};
    const backgroundImage = ""

    function handleScrollToSection(e){
        const elementId = e.target.value
        document.getElementById(elementId).scrollIntoView()
    }
    

    return(
        <>
            <Jumbotron id="home-jumbo" jumboStyle={jumboStyle} backgroundImage={backgroundImage}>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col md={12} style={{textAlign: "center"}}>
                                    <div>
                                        <span id="yannik">Yannik Büchi</span><br/>
                                        <img id="profile-pic" src={require("./Images/SemiProfessionalPicSmaller.jpg")} alt="Yannik"/>     
                                        <div id="adjectives" className="content" style={{textAlign: "center"}}>
                                            <div className="content_container">
                                                <ul className="content__container__list">
                                                    <li className="content__container__list__item" style={{color: "lightblue"}}>
                                                        Mission-driven
                                                    </li>
                                                    <li className="content__container__list__item" style={{color: "lightblue"}}>
                                                        Trilingual
                                                    </li>
                                                    <li className="content__container__list__item" style={{color: "lightblue"}}>
                                                        Fullstack
                                                    </li>
                                                    <li className="content__container__list__item" style={{color: "lightblue"}}>
                                                        Chocolate-loving
                                                    </li>
                                                </ul>
                                            </div>
                                            <p id="software-engineer" style={{textAlign: "center", color: "white"}}>Software Engineer</p> 
                                            <p id="skill-pane">JavaScript | React | Ruby | Rails | SQL</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>   
            </Jumbotron>

            <section id="home-content">
            <article id="featured" className="content-article">
                
                <Container >
                    <Row>
                        <Col lg={12}>
                            <h2 className="heading-sec">Featured Project</h2>
                            <h3>Upskill your cooking. Become your own personal chef.</h3>

                        </Col>
                        <Col lg={12}>
                            <img className="floating" src={require("./Images/Cuisto.png")} style={{height: "200px"}} alt="Cuisto"/>
                        </Col>
                        <Col lg={12} className="vertically-center proj-nav" >
                            <Button href="https://cuisto.herokuapp.com/" target="_blank" className="nav-btn">Demo</Button>
                            <Button variant="secondary" className="nav-btn" href="/portfolio">View Full Portfolio</Button>
                        </Col>

                    </Row>

                </Container>
            </article>
            <article id="toolkit" className="content-article">
                
                <h2 className="heading-sec">
                <img src={require("./Images/tools.png")} alt="tools" style={{height: "40px", marginRight: "20px"}}/>
                    Tool Kit
                </h2>
                        <Container>
                            <Row >
                                <Col className="front-end" lg={12}>
                                    <Row>
                                        
                                        <Col lg={11}>
                                            <Row>
                                            <Col lg={12}>
                                                <img id="react" className="icon2" src={require("./Images/react2.png")} alt="javascript"/>
                                                <p className="about-list">React</p>
                                            </Col>

                                            <Col lg={4}>
                                                <img className="icon2" src={require("./Images/JS.png")} alt="javascript"/>
                                                <p className="about-list">JavaScript</p>
                                            </Col>
                                            <Col lg={4}>
                                                <img className="icon2" src={require("./Images/css2.png")} alt="javascript"/>
                                                <p className="about-list">CSS3</p>
                                            </Col>
                                            <Col lg={4}>
                                                <img className="icon2" src={require("./Images/html2.png")} alt="javascript"/>
                                                <p className="about-list">HTML5</p>
                                            </Col>

                                            </Row>  
                                        </Col>

                                        <Col className="side-title" lg={1}>
                                            <h4 style={{fontSize: "60px"}}>Front-End</h4>
                                        </Col> 
                                    
                                    </Row>
                                </Col>

                                <Col className="front-end" lg={12} >

                                <Row>
                                <Col lg={11}>
                                    <Row>
                                        <Col lg={6}>
                                            <img id="ruby" className="icon2"  src={require("./Images/Rb.png")} alt="ruby"/>
                                            <p className="about-list">Ruby</p>
                                        </Col>
                                        <Col lg={6}>
                                            <img id="rails" className="icon2"  src={require("./Images/rails.png")} alt="ruby"/>
                                            <p className="about-list">Rails</p>
                                        </Col>
                                    </Row>
                                </Col>
                                

                                <Col className="side-title" lg={1}>
                                    <h4>Back-End</h4>
                                </Col>

                                </Row>
                                </Col>
                            </Row>
                        </Container>
            </article>
            <hr style={{color: "black"}}/>

            <article id="values-article" className="content-article">
            <h2 id="values" className="heading-sec" >Work Values</h2>
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
                        Self-Motivated
                </Button>
                <Button className="page-nav-btn" 
                        variant="light"
                        value="tools"
                        onClick={handleScrollToSection}>
                        Team Player
                </Button>
                
            </div> 

                <article className="page-text-container">
                    <Container>
                        <Row>
                            <Col sm={12} md={6} id="mission-col-container" className="col-container">
                                <h1 className="page-section-header" id="mission">Mission-Driven</h1>
                                <p className="page-text-p">{mission.paragraph}</p>
                                <p className="page-text-p">{mission.paragraph2}</p>
                                <p className="page-text-p">{mission.paragraph3}</p>
                            </Col>
                            <Col id="mission-quote" style={{position: "relative"}} sm={12} md={6}>
                                <h3 className="page-text-q">{mission.quote}</h3>
                            </Col>
                        </Row>   
                    </Container> 
                </article>

            
                <div className="page-text-container">
                    <Container>
                        <Row>
                            <Col id="always-be-coding" style={{position: "relative"}} sm={12} md={6}>
                                <div className="page-text-q">
                                    <h3>There is no passion without struggle.</h3>
                                    <h6>-Albert Camus</h6>
                                </div>
                                
                            </Col>
                            <Col sm={12} md={6} id="work-col-container" className="col-container">
                                <h1 className="page-section-header" id="work">Self-Motivated</h1>
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
                                <h1 className="page-section-header" id="tools">Team Player</h1>
                                <p className="page-text-p">{work_tools.paragraph1}</p>
                                <p className="page-text-p">{work_tools.paragraph2}</p>
                                <p className="page-text-p">{work_tools.paragraph3}</p>
                            </Col>
                            <Col id="human-centric" style={{position: "relative"}} sm={12} md={6}>
                                <div className="page-text-q">
                                    <h3>Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination.</h3>
                                    <h6>-Albert Einstein</h6>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </article>
            </section>
        </>
    )
}
export default Home;