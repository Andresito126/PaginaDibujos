import React from "react";
import "../../Styles/Footer.css";

export default function Footer(){


    return(

        <footer id="contact">
        <div className="linea">
            <ul>
                <li>
                    <h3>Found me on</h3>
                </li>
                <li>
                    <a href="">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/alleks_drw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Inspirations</h3>
                </li>
                <li>
                    <a href="https://www.instagram.com/sahlarei?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        <i className="fa-brands fa-instagram"></i><p>Sahlarei</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="fa-brands fa-instagram"></i><p>Mauro Delacroix</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="fa-brands fa-instagram"></i><p>Thunder starx</p>
    
                    </a>
                </li>
            </ul>
        </div>
        <div className="linea2">  
            <i className="fa-regular fa-copyright" aria-hidden="true"></i>  All rights reserved
        </div>
    </footer>

    )


}
