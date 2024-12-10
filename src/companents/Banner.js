import React from 'react';
import img1 from '../img/s-303.jpg';
import img2 from '../img/s-201-a.jpg';
import img3 from '../img/s-201-a.jpg';
import Banner from '../styles/Banner.css';
const Carousel = () => {
  return (
    <section>
      <p style={{ width: '100%', padding: '2px', backgroundColor: 'rgb(0, 59, 20)' }}></p>
      
      {/* Carousel */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel">

        {/* Indicators/dots */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        {/* The slideshow/carousel */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} alt="#" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={img2} alt="#" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={img3} alt="#" className="d-block w-100" />
          </div>
        </div>

        {/* Left and right controls/icons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
