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
                                <li>Home</li>
                                <li>Portfolio</li>
                                <li>About</li>
                            </ul>
                    </figure>
                </Col>
                <Col lg={12}>
                    <figure>
                        <figcaption className="sidebar-list-title">Social Media Links</figcaption>
                        <ul className="footer-list">
                            <li>Github</li>
                            <li>LinkedIn</li>
                        </ul>
                    </figure>
                </Col>
                <Col lg={12}>
                    <figure>
                        <figcaption className="sidebar-list-title">Recent Projects</figcaption>
                        <ul className="footer-list">
                            <li>Project 1</li>
                            <li>Project 2</li>
                            <li>Project 3</li>
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