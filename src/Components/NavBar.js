import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown'


function NavBar(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/home">Yannik Büchi</Link> | {" "}
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
            </Container>
        </Navbar>
    )
}

export default NavBar;