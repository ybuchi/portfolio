import React from "react";
import "./Jumbotron.css";

function Jumbotron({ children, jumboStyle}){
    return(
        <div className="jumbotron" style={jumboStyle}>
            {children}
        </div>
    )
}

export default Jumbotron;