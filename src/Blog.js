
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./companents/Navbar";
import Footer from "./companents/Footer";
import Banner from "./companents/Banner";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Aticle from "./companents/Aticle";
import { Routes, Route } from 'react-router-dom';

function Blog() {
  return (
    <div>
        <Navbar/>

        <Footer/>
    </div>
  );
}

export default Blog;
