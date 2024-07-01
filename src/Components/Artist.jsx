import React from "react";
import "../Styles/Artist.css"

function Artist(props){
    return(
        <li className="recom" key={props.kay}>
            <img src={props.imag} alt={props.name} />
            <h3>{props.name}</h3>
            <p> {props.description} </p>
            <a href={props.profile}>Visit</a>
        </li>
    )
}

export default Artist