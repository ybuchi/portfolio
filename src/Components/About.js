import React from "react";
import Jumbotron from "./Jumbotron";
import { about } from "../Data/data"

function About(){
    return(
        <Jumbotron>
            <h1>About Page</h1>
            <p>{about.quote}</p>
        </Jumbotron>
    )
}

export default About;