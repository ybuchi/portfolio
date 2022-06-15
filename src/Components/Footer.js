import React from "react";
import { Link } from "react-router-dom";
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
                                <li><Link className="footer-link" to="/">Home</Link></li>
                                <li><Link className="footer-link" to="portfolio">Portfolio</Link></li>
                                <li><Link className="footer-link" to="about">About</Link></li>
                            </ul>
                    </figure>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <figure>
                        <figcaption className="footer-list-title">Social Media Links</figcaption>
                        <ul className="footer-list">
                            <li><a className="footer-link" href="https://github.com/ybuchi" rel="noreferrer" target="_blank">Github</a></li>
                            <li><a className="footer-link" href="https://github.com/ybuchi" rel="noreferrer" target="_blank">LinkedIn</a></li>
                        </ul>
                    </figure>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <figure>
                        <figcaption className="footer-list-title">Recent Projects</figcaption>
                        <ul className="footer-list">
                            <li><a className="footer-link" href="https://cuisto.herokuapp.com/"><strong style={{fontStyle: "italic"}}>Cuisto</strong> - the Best App for Home Cooks!</a></li>
                            <li><a className="footer-link" href="https://gorgeous-empanada-210319.netlify.app/"><strong style={{fontStyle: "italic"}}>Ellis</strong> - Study for the American Naturalization Exam</a></li>
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