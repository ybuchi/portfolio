import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import "./NavBar.css";


function NavBar({ show, setShow, handleShow }){
  
    return(
        <Navbar bg="dark" variant="dark">
            <Button id="sidebar-btn" variant="primary" onClick={handleShow}>
                <AiOutlineMenu />
            </Button>
            <img id="nav-logo" src={require("./Images/logo_cropped.png")} alt="Yannik's logo"/>
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
                    <li style={{display: "inline", marginLeft: "20px", fontSize: "1.5rem"}}>
                        <AiOutlineGithub style={{color: "white"}} />
                    </li>
                    <li style={{display: "inline", marginLeft: "20px", fontSize: "1.5rem"}}>
                        <AiOutlineLinkedin style={{color: "white"}} />
                    </li>
                </ul>
                
            </Container>
        </Navbar>
    )
}

export default NavBar;