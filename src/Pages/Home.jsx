import React from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import WhoAIm from "../Components/WhoAIm";
import Draws from "../Components/Draws";
import Recommendations from "../Components/Recommendations";
import Footer from "../Components/Footer";


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
