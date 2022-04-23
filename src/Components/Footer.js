import React from "react";
import "./Footer.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer(){
 return(
     <>
    <footer>
        <Container>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <figure>
                        <figcaption className="footer-list-title">Navigation</figcaption>
                            <ul className="footer-list">
                                <li>Home</li>
                                <li>Portfolio</li>
                                <li>About</li>
                            </ul>
                    </figure>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <figure>
                        <figcaption className="footer-list-title">Social Media Links</figcaption>
                        <ul className="footer-list">
                            <li>Github</li>
                            <li>LinkedIn</li>
                        </ul>
                    </figure>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <figure>
                        <figcaption className="footer-list-title">Recent Projects</figcaption>
                        <ul className="footer-list">
                            <li>Project 1</li>
                            <li>Project 2</li>
                            <li>Project 3</li>
                        </ul>
                    </figure>
                </Col>
            </Row>
        </Container>
    </footer>
    </>
 )   
}

export default Footer;