import logo from './logo.svg';
import { useState } from "react";
import Nav from './Components/NavBar';
import { Link } from "react-router-dom";
import './App.css';
import Sidebar from './Components/Sidebar';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { Outlet } from "react-router-dom"


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
        <Sidebar show={show} setShow={setShow} handleShow={handleShow} handleClose={handleClose}/>
        <Outlet />
        <Footer/>
      </div>
      </>
  )
}

export default App;
