
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./companents/Navbar";
import Footer from "./companents/Footer";
import Banner from "./companents/Banner";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Aticle from "./companents/Aticle";
import { Routes, Route } from 'react-router-dom';
import Blog from "./Blog";

function App() {
  return (

    <div>
      <Navbar />
      <Banner />
      <Aticle />
      <Footer />
    </div>
  );
}

export default App;
