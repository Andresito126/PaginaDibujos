import React from "react";
import Obra from "../Components/Obra";
import Comentarios from "../Components/Comentarios";
import Footer from "../Components/Footer";
import balance from "../Draws/balance.png"
import "../Styles/InfoDraw.css"

let comments = [
    {
        pfp: "pfp",
        name: "User",
        content: "Holaaaaaaaaa"
    }
]

function InfoDraw (){

  return (
    <>
      <div className="info-and-comments">
        <Obra 
          name = "Obra"
          imag = {balance}
          color  = ""
        />
        <Comentarios comments = {comments} />
      </div>
      <Footer></Footer>
    </> 
  )
}

export default InfoDraw;
