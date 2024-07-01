import React from "react";
import Comentario from "../molecules/Comentario";
import "../../Styles/Comentarios.css"

function Comentarios(props){
    let comments = props.comments.map((comment) => (
        <Comentario 
            pfp = {comment.pfp}
            name = {comment.nick}
            contenido = {comment.comment}
        />
    ))

    return (
        <div className="comments-container">
            <h1 className="encabezado">Comentarios</h1>
            <ul>
                {comments}
            </ul>
        </div>
    )

}

export default Comentarios;