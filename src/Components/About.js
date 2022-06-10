import React from "react";
import Jumbotron from "./Jumbotron";
import { about } from "../Data/data"

function About(){
    //Introduction 
    //A table of (hard) skills
    //1. Javascript a.React 2. Ruby 3. SQL 4. Tableau 5. Agile methodolgy and principles

    //A short resumes of places and jobs

    //Restate mission statement with different details details (philosophy)

    return(
        <>
        <Jumbotron>
            <h1>About Page</h1>
            <p>{about.quote}</p>
        </Jumbotron>
        <h1>Introduction Here</h1>
        <p>Introduction paragraph</p>

        
        </>
    )
}

export default About;