import React from "react";
import Icon from "./Icon";
import "../Styles/Button.css"

function Button(props){
    return (
        <button className="button-Icon">
            <Icon isLike = {props.isLike} />
            <p> {props.cant} </p>
        </button>
    )
}

export default Button;