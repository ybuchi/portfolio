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
            {/* <Button id="sidebar-btn" variant="primary" onClick={handleShow} style={{marginLeft: "25px"}}>
                <img id="nav-logo" src={require("./Images/MyLogo-B&W.png")} alt="menu"/>
            </Button> */}
            <nav style={{margin: "0px 0px", padding: "5px 0px", textAlign: "center"}}>
                <ul id="navbar-list">
                    <li style={{display: "inline", marginRight: "20px"}}>
                        <Link className="navbar-link" to="/">Home</Link>
                    </li>
                    <li style={{display: "inline"}}>
                        <Link className="navbar-link" to="/about">About</Link>
                    </li>
                    <li style={{display: "inline", marginLeft: "20px"}}>
                        <Link className="navbar-link" to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </nav>
            <nav  className="ms-auto" style={{marginRight: "25px"}}>
                <ul id="menu-items">
                    <li style={{display: "inline", marginLeft: "20px", fontSize: "1.5rem"}}>
                        <a href="https://github.com/ybuchi" target="blank">
                            <AiOutlineGithub style={{color: "white"}} />
                        </a>
                    </li>
                    <li style={{display: "inline", marginLeft: "20px", fontSize: "1.5rem"}}>
                        <a href="https://www.linkedin.com/in/yannikbuchi" target="blank">
                            <AiOutlineLinkedin style={{color: "white"}} />
                        </a>
                    </li>
                </ul>
            </nav>
        </Navbar>
    )
}

export default NavBar;