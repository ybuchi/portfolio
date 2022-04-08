import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'


function NavBar({ show, setShow, handleShow }){
  
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Button id="sidebar-bttn" variant="primary" onClick={handleShow}>
                    Launch
                </Button>
                <ul>
                    <li style={{display: "inline", marginRight: "20px"}}>
                        <Link to="/home">Yannik Büchi</Link>
                    </li>
                    <li style={{display: "inline"}}>
                        <Link to="/about">About</Link>
                    </li>
                    <li style={{display: "inline", marginLeft: "20px"}}>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </Container>
        </Navbar>
    )
}

export default NavBar;