import React, { useEffect } from "react";
import Obra from "../Components/Obra";
import Comentarios from "../Components/Comentarios";
import Footer from "../Components/Footer";
import "../Styles/InfoDraw.css"

function InfoDraw (){
  let dibujo= JSON.parse(localStorage.getItem('draws'))[localStorage.getItem('indexDraw')]
  
  return (
    <>
      <div className="info-and-comments">
        <Obra 
          name = {dibujo.name}
          imag = {dibujo.imag}
          cant = {dibujo.likes}
          liked = {dibujo.liked}
          numComments = {dibujo.comments.length}
        />
        <Comentarios comments = {dibujo.comments} />
      </div>
      <Footer></Footer>
    </> 
  )
}

export default InfoDraw;
