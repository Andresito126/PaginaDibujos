import React from "react";
import '../Styles/Header.css';
export default function Header() {
  return (
    <>
      <header id="banner">
        <img className="bgBanner" src="./src/draws/Banner.png" alt="" />
        <img className="pfp" src="./src/draws/PFP.png" alt="" />
        <h1 className="name">ALLEKS</h1>
      </header>
    </>
  );
}
