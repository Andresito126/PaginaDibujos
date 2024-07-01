import React from "react";
import "../../Styles/FormComment.css"

function FormComment(){
    return(
        <form action="" className="formComment">
            <button className="closeBtn">x</button>
            <h1>Comment</h1>
            <textarea placeholder="Write what are you thinking..." name="" id=""></textarea>
            <button type="button" className="btnSubmit">Comment</button>
        </form>
    )
}