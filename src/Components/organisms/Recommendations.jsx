import React from "react";
import recomes from "../../data/recomes";
import Artist from "../molecules/Artist"
import "../../Styles/Recommendations.css";

export default function Recommendations(){
    const listRecomes = recomes.map((artist, index) => (
        <Artist 
            key = {artist.name + index}
            imag = {artist.imag}
            name = {artist.name}
            desc = {artist.description}
            profile = {artist.link}
        />
    ))

    return(

        <section id="recommendations" className="recommendations">
        <h1>Recommendations</h1>
        <p>
            These are my favorite digital artists right now, I think you like them
        </p>
        <br/>
        <ul id="recomes">
            {listRecomes}
        </ul>
    </section>

    )

}
