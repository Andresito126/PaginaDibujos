import React from "react";
import "../Styles/Comentario.css"
import pfp from "../Artists/pfp.jpg"

function Comentario(props){
    return (
        <li className="comment-container">
            <img src= {pfp} alt="" />
            <div className="info-comment">
                <h3> {props.name} </h3>
                <p> 
                    {props.contenido}
                </p>
            </div>
        </li>
    )
}

export default Comentario;