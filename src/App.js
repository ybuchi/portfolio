import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { Outlet } from "react-router-dom"
import Nav from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
    
  );
}

export default App;
