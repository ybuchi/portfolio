import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const container = document.getElementById("root");
const root = createRoot(container)

root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
