import React, { useState, useEffect } from 'react';
import "../../Styles/Draws.css";
import drawList from "../../data/drawList";
import Draw from "../molecules/Draw";

export default function Draws() {
    // inicializar los datos 
    useEffect(() => {
        const savedDraws = localStorage.getItem('draws');
        if (!savedDraws || savedDraws === 'null') {
            localStorage.setItem('draws', JSON.stringify(drawList));
        } else {
            console.log('Datos cargados desde localStorage:', JSON.parse(savedDraws));
        }
    }, []);

    // ver estaod de los dibujos
    const [listaDibujos, setlistaDibujos] = useState(() => {
        const savedDraws = localStorage.getItem('draws');
        return savedDraws && savedDraws !== 'null' ? JSON.parse(savedDraws) : drawList;
    });

    // visualizar en el local consola
    useEffect(() => {
        if (listaDibujos && listaDibujos !== 'null') {
            localStorage.setItem('draws', JSON.stringify(listaDibujos));
        }
    }, [listaDibujos]);

    
    useEffect(() => {
        console.log('Estado listaDibujos:', listaDibujos);
    }, [listaDibujos]);

    // se verifica si es unull
    if (!listaDibujos || listaDibujos === 'null') {
        return <div>Loading...</div>;
    }

  
    const renderedList = listaDibujos.map((draw, index) => (
        <Draw 
            id={index}
            key={draw.name + index}
            imag={draw.imag}
            name={draw.name}
            desc={draw.description}
        />
    ));

    return (
        <section id="draws" className="draws">
            <h1>My draws</h1>
            <ul id="obras">
                {renderedList}
            </ul>
        </section>
    );
}
