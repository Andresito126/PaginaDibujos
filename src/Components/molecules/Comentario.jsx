import React from "react";
import "../../Styles/Comentario.css"


function Comentario(props){
    return (
        <li className="comment-container">
            <img src= {props.pfp} alt="" />
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