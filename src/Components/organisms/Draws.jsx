import React, { useState, useEffect } from 'react';
import "../../Styles/Draws.css";
import drawList from "../../data/drawList";
import Draw from "../molecules/Draw"

export default function Draws (){
    const [listaDibujos, setlistaDibujos] = useState(drawList);
  
    useEffect(() => {
      localStorage.setItem('draws', JSON.stringify(listaDibujos));
    }, [listaDibujos]);

    const renderedList = JSON.parse(localStorage.getItem('draws')).map((draw, index) => (
        <Draw 
            id = {index}
            key = {draw.name + index}
            imag = {draw.imag}
            name = {draw.name}
            desc = {draw.description}
        />
    ))

    return(
        <section id="draws" className="draws">
            <h1>My draws</h1>
                <ul id="obras">
                    {renderedList}
                {console.log(drawList)}
            </ul>
        </section>
    )


}

