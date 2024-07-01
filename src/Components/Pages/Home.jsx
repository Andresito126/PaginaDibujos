import React from "react";
import NavBar from "../organisms/NavBar"
import Header from "../organisms/Header";
import WhoAIm from "../molecules/WhoAIm";
import Draws from "../organisms/Draws";
import Recommendations from "../organisms/Recommendations";
import Footer from "../organisms/Footer";

export default function Home() {
  return (
    <>
      
        <NavBar></NavBar>
        <Header></Header>
        <section className="main">
          <WhoAIm></WhoAIm>
          <Draws></Draws>
          <Recommendations></Recommendations>
        </section>
          <Footer></Footer> 
    </>
  );
}
