import logo from './logo.svg';
import { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar';
import { Outlet } from "react-router-dom"
import Nav from './Components/NavBar';
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

function App() {
  // State for sidebar
  const [show, setShow] = useState(false)

  function handleShow () {
      setShow(!show)
  }

  function handleClose(){
      setShow(false)
  }

  return(
      <>

      <div className="App">
        <NavBar show={show} setShow={setShow} handleShow={handleShow}/>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              Yannik Büchi
            </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <ul>
            <li>
              <Link to="/portfolio">All Portfolios</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </Offcanvas.Body>

        </Offcanvas>
        <Outlet />
      </div>
      </>
  )
}

export default App;
