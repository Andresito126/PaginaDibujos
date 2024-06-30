import React from "react";
import Button from "./Button";
import "../Styles/Obra.css"

function Obra (props) {
    return (
        <div className="obra-container">
            <h1> {props.name} </h1>
            <img src = {props.imag} alt="" />
            <div className="buttons">
                <Button 
                    isLike = {true} 
                    color = {props.color}
                />
                <Button 
                    isLike = {false} 
                />
            </div>
        </div>
    )
}

export default Obra;