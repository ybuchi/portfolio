import React from "react";
import "./Jumbotron.css";

function Jumbotron({ children, jumboStyle, id}){
    return(
        <div id={id ? id : ""} className="jumbotron" style={jumboStyle}>
            {children}
        </div>
    )
}

export default Jumbotron;