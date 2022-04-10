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

                        <div stye={{position: "relative"}}>
                            <div className="content" style={{left: "25%", fontSize:"45px"}}>
                                <div className="content_container">
                                    <ul className="content__container__list" style={{animationDelay: "1s"}}>
                                        <li >Hi!</li>
                                        <li className="content__container__list__item">Bonjour!</li>
                                        <li className="content__container__list__item">Hallo!</li>
                                        <li className="content__container__list__item">
                                            <img id="nav-logo" src={require("./Images/logo_cropped.png")} alt="Yannik's logo"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="content" style={{left: "75%", fontSize:"30px"}}>
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