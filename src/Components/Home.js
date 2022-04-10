import React, { useState } from "react";
import { mission } from "../Data/data";
import "./Home.css";
import "./Images/mountain.jpg"
import Jumbotron from "./Jumbotron";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

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

    const jumboStyle = {backgroundColor: "black", color: "white"};

    return(
        // Have the "Hi, Bonjour, Hallo" placed horizontally from each other and some animation that boldens each of them one at a time
        <>

            <Jumbotron jumboStyle={jumboStyle}>
                <Container >
                    <Row>
                        <Col md={6}>
                            <div className="content">
                                <div className="content_container">
                                    <ul className="content__container__list">
                                        <li >Hi!</li>
                                        <li className="content__container__list__item">Bonjour!</li>
                                        <li className="content__container__list__item">Hallo!</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <h1>I'm <strong>Yannik</strong>,</h1>
                            <h3>A <strong>mission-driven</strong> developper</h3>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            {/* Navigations to Mission, How I work and Tools */}
            <Button className="page-nav-btn" variant="info">Mission</Button>
            <Button className="page-nav-btn" variant="info">Work</Button>
            <Button className="page-nav-btn" variant="info">Tools</Button>

            <h1>Mission</h1>
            <p>{mission.paragraph}</p>

            <h1>Work</h1>
            <p>{mission.paragraph}</p>

            <h1>Tools</h1>
            <p>{mission.paragraph}</p>

        </>
    )
}

export default Home;