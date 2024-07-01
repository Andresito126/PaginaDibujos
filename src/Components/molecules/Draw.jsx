import React from "react";
import { useNavigate } from 'react-router-dom';
import "../../Styles/Draw.css"

function Draw(props){
    const navigate = useNavigate()

    function goToInfo(index){
        localStorage.setItem("indexDraw", index)
        navigate('/draw')
    }

    return (
        <li className="draw" >
            <button onClick={() => goToInfo(props.id)}>
                <img src={props.imag} alt="" />
                <h3> {props.name} </h3>
                <p> {props.desc} </p>
            </button>
        </li>
    )
}

export default Draw