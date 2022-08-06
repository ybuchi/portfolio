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
                                <Col id="front-end" className="front-end" lg={12}>
                                    <Row>
                                        <Col className="side-title front" lg={1}>
                                            <h4 style={{fontSize: "60px"}}>Front-End</h4>
                                        </Col> 
                                        
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

                                        
                                    
                                    </Row>
                                </Col>

                                <Col id="back-end" className="front-end" lg={12} >

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
                                    <Row>
                                        <Col lg={4}>
                                            <img id="postgres" className="icon2"  src={require("./Images/Postgres.png")} alt="postgres"/>
                                            <p className="about-list">Postgres</p>
                                        </Col>
                                        <Col lg={4}>
                                            <img id="nodejs" className="icon2"  src={require("./Images/node.png")} alt="node"/>
                                            <p className="about-list">Node.js</p>
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
            </section>
        </>
    )
}
export default Home;