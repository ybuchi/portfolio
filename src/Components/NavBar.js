import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import { AiOutlineMenu } from "react-icons/ai";
import "./NavBar.css";


function NavBar({ show, setShow, handleShow }){
  
    return(
        <Navbar bg="dark" variant="dark">
            <Button id="sidebar-btn" variant="primary" onClick={handleShow}>
                <AiOutlineMenu />
            </Button>
            <Container style={{margin: "0px 0px", padding: "5px 0px"}}>
                <ul id="navbar-list">
                    <li style={{display: "inline", marginRight: "20px"}}>
                        <Link className="navbar-link" to="/home">Yannik Büchi</Link>
                    </li>
                    <li style={{display: "inline"}}>
                        <Link className="navbar-link" to="/about">About</Link>
                    </li>
                    <li style={{display: "inline", marginLeft: "20px"}}>
                        <Link className="navbar-link" to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
                
            </Container>
        </Navbar>
    )
}

export default NavBar;