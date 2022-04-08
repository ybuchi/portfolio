import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./Home.css"
import "./Images/mountain.jpg"
import Image from 'react-bootstrap/Image'


function Home(){
    return(
        <Carousel>
            <Carousel.Item className="carousel-img">
                <img
                    src="./Images/mountain.jpg"
                    alt="First Slide"
                />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>Some info about the first slide</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-img">
                <img src="src/Components/Images/mountain.jpg" alt="Second Slide"/>
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>Some info about the second slide</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Home;