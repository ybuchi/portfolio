import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Sidebar({ show, handleClose }){
    return(
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              Yannik Büchi
            </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
        <Container>
            <Row>
                <Col lg={12}>
                    <figure>
                        <figcaption className="sidebar-list-title">Navigation</figcaption>
                            <ul className="sidebar-list">
                                <li><Link className="sidebar-link" to="/">Home</Link></li>
                                <li><Link className="sidebar-link" to="portfolio">Portfolio</Link></li>
                                <li><Link className="sidebar-link" to="about">About</Link></li>
                            </ul>
                    </figure>
                </Col>
                <Col lg={12}>
                    <figure>
                        <figcaption className="sidebar-list-title">Social Media Links</figcaption>
                        <ul className="footer-list">
                            <li><a className="sidebar-link" href="https://github.com/ybuchi" target="_blank" rel="noreferrer">Github</a></li>
                            <li><a className="sidebar-link" href="https://www.linkedin.com/in/yannikbuchi/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        </ul>
                    </figure>
                </Col>
                <Col lg={12}>
                    <figure>
                        <figcaption className="sidebar-list-title">Recent Projects</figcaption>
                        <ul className="footer-list">
                            <li><a className="sidebar-link" href="https://cuisto.herokuapp.com" target="_blank" rel="noreferrer">Cuisto</a></li>
                            <li><a className="sidebar-link" href="https://gorgeous-empanada-210319.netlify.app/">Ellis</a></li>
                        </ul>
                    </figure>
                </Col>
            </Row>
        </Container>
        </Offcanvas.Body>

        </Offcanvas>
    )
}

export default Sidebar;