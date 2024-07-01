import React from "react";
import Button from "./Button";
import "../Styles/Obra.css"

function Obra (props) {
    return (
        <div className="obra-container">
            <h1 className="encabezado"> {props.name} </h1>
            <img src = {props.imag} alt="" />
            <div className="buttons">
                <Button 
                    isLike = {true} 
                    cant ={props.cant}
                    liked = {props.liked}
                />
                <Button 
                    isLike = {false} 
                    cant = {props.numComments}
                />
            </div>
        </div>
    )
}

export default Obra;