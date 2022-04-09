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
       <Jumbotron>
           <Container>
               <Row>
                   <Col md={6}>
                       Hi!
                       Bonjour!
                       Hallo!
                   </Col>
                   <Col md={6}>
                       My name is Yannik and I'm a Mission-Driven Software Engineer
                   </Col>
               </Row>
           </Container>
       </Jumbotron>
    )
}

export default Home;