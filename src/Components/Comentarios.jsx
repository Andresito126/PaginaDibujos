import React from "react";
import Comentario from "./Comentario";
import "../Styles/Comentarios.css"

function Comentarios(props){
    let comments = props.comments.map((comment) => (
        <Comentario 
            pfp = {comment.pfp}
            name = {comment.name}
            contenido = {comment.content}
        />
    ))

    return (
        <div className="comments-container">
            <h1>Comentarios</h1>
            <ul>
                {comments}
            </ul>
        </div>
    )

}

export default Comentarios;