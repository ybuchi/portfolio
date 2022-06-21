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
        <Jumbotron id="about-jumbo">
            <h1>About</h1>
        </Jumbotron>

        <article className="about-article" id="about-personal" style={{textAlign: "left"}}>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <div style={{textAlign: "left"}}>
                            <img className="country-logo" src={require("./Images/Colombia.png")} alt="Colombia"></img>
                        </div>
                        <div style={{textAlign: "center"}}>
                            <img className="country-logo" src={require("./Images/Switzerland.png")} alt="Colombia"></img>
                        </div>
                        <div style={{textAlign: "right"}}>
                            <img className="country-logo" src={require("./Images/USA.png")} alt="Colombia"></img>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <h1>Personal Background</h1>
                        <p>Hi! I'm Yannik!</p>
                        <p>I was born in Bogotá, Colombia and adopted into a Swiss family soon after. Unfortunately, this did not leave me with enough time to learn and retain any Spanish. </p>
                        <p>Our family immigrated to Westchester, New York in 1997, where I grew up as part of the francophone expatriate community of the area.</p>
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
                    <Col sm={12} md={6}>
                        <h1> Educational Background </h1>
                        <div className="education-container">
                            <p>I spent grades K-12 at the French-American School of New York, a bilingual school, from which I graduated with an American high school diploma as well as with a diploma of the French of Baccalaureate.</p>
                        </div>
                        <div className="education-container">
                            <p>After high school, my interest in environmental biology and my strong desire to keep in touch with my francophone roots led me to complete a Bachelor of Arts degree at Colby College in Waterville, Maine with a double major in Biology and French Studies. </p>
                            <p>I didn't know it at time, but studying biology exposed me to to my first programming experience that ultimately led to my transition into Software Engineering.</p>
                        </div>
                        <div className="education-container">
                            <p>Following my keen interest in leveraging technology to create a positive social and environmental impact, I grew initially self-taught skills and curiosity in programming into a data analyst role (see professional experience), and subsequently enrolled in a 15-week full-time fulltstack engineering bootcamp at Flatiron School.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div style={{textAlign: "center"}}>
                            <img className="country-logo" src={require("./Images/FASNY-logo.jpg")} alt="FASNY"/>
                        </div>
                        <br/>
                        <div style={{textAlign: "center"}}>
                            <img className="country-logo" src={require("./Images/colby-college-logo.png")} alt="FASNY"/>
                        </div>

                        <br/>
                        <div style={{textAlign: "center"}}>
                            <img className="country-logo" src={require("./Images/Flatiron.png")} alt="FASNY"/>
                        </div>


                    </Col>
                </Row>
            </Container>
        </article>

        <article className="about-article" id="about-professional" style={{textAlign: "left"}}>
            <Container>
                <Row>
                    <Col sm={12} md={6}> 
                        <div style={{textAlign: "right"}}>
                            <img className="country-logo" src={require("./Images/ithaka.png")} alt="ITHAKA"/>
                        </div>
                        <div style={{textAlign: "center"}}>
                            <img className="country-logo" src={require("./Images/SA.png")} alt="Success Academy Charter Schools"/>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <h1> Professional Background </h1>
                        <div className="professional-container">
                            <p>After graduating from college, I looked for ways in which I could use the data analysis and programming experience I had acquired as a biology major to land a position in which I could grow my technical skills.</p>
                        </div>
                        <div className="education-container">
                            <p>As an Education Coordinator at Success Academy Charter Schools, I compiled, managed, and analyzed student data to assist teachers in monitoring student performance and advocating for appropriate Special Education programs.</p>
                        </div>
                        <div className="education-container">
                            <p>While I gained a lot of experience collaborating with various kinds of stakeholders from parents to teachers and DOE representatives, I left SA Charter Schools for ITHAKA, a leader in academic publishing and research, where I initially worked as part of the Content Development team. </p>
                        </div>
                        <div className="education-container">
                            <p>As a Publisher Support Associate, I began teaching myself SQL, report automation and data visualization in Tableau, and quickly grew into a data consultant role, supporting external stakeholders such as academic publishers, libraries and consortiums with the data, tools and reports to make data-driven decisions about the content they wanted to include on the ITHAKA's JSTOR platform.</p>
                        </div>
                        <div className="education-container">
                            <p>My drive and success as Publisher Associate enabled me to grow into the position of data analyst in the organization's brand new Business Intelligence Team. There, I grew and thrived as a part of a fast-paced Agile team.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            
        </article>
        </>
    )
}

export default About;