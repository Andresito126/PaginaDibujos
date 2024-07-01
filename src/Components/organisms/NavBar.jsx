import React from "react";
import '../../Styles/NavBar.css';

export default function NavBar(){

    return(

        

<nav className="navbar" id="navbar">
        <a id="homebtn" href="#banner">
            Alleks
        </a>
        <ul>
            <li>
                <a href="#whoami">
                    Who am I?
                </a>
            </li>
            <li>
                <a href="#draws">
                    My Draws
                </a>
            </li>
            <li>
                <a href="#recommendations">
                    Recommendations
                </a>
            </li>
            <li id="loginBtn" className="loginBtn">
                <a href="./login.html">Log In</a>
            </li>
        </ul>
    </nav>

    )

}