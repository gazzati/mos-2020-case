import React from 'react'
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Block from "./components/Block";
import ProdBot from "./components/ProdBottom";
import ProdTop from "./components/ProdTop";

function App() {
  return (
      <div className="tz-site">

        <Header />

        <Slider />

        <Block />

        <ProdTop />

        <ProdBot />

        <Footer />

      </div>
  )
}

export default App
