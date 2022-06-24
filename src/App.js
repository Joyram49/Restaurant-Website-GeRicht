import React from "react";
import "./App.css";

import {
  Header,
  AboutUs,
  Special,
  Chef,
  IntroVid,
  Laurels,
  Gallery,
  FindUs,
  Footer,
} from "./container";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <AboutUs />
      <Special />
      <Chef />
      <IntroVid />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
