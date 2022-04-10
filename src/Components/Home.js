import React, { useState } from "react";
import "./Images/mountain.jpg"
import Jumbotron from "./Jumbotron";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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


    return(
        // Have the "Hi, Bonjour, Hallo" placed horizontally from each other and some animation that boldens each of them one at a time
        <>

        <Jumbotron>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>Hi!</h1>
                        <h2>Bonjour!</h2>
                        <h3>Hallo!</h3>
                    </Col>
                    <Col md={6}>
                        <h1>I'm <strong>Yannik</strong>,</h1>
                        <h3>A <strong>mission-driven</strong> developper</h3>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>


        {/* Navigations to Mission, How I work and Tools */}

        <h1>Mission</h1>

        <h1>How I work</h1>

        <h1>Tools</h1>
       </>
    )
}

export default Home;