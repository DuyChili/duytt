import React from 'react';
import '../styles/navbar.css';
import logo from '../img/logo.png';
import App from '../App';
import { useNavigate } from 'react-router-dom';
import Blog from '../Blog';

function Navbar () {
    const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
    navigate('/blog'); // Điều hướng đến trang /app
  };
  return (
    <section>
      <nav className="navbar navbar-expand-sm navbar-white bg-white fixed-top">
        <div className="container">
          <a className="navbar-brand m-3" href="index.html">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown me-2">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                  HOME
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li><a className="dropdown-item text-white" href="#"onClick={handleClick}>Corporate (Default)</a></li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle text-white" href="#">Alternatives</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item text-white" href="index_2.html">Home 2</a></li>
                      <li><a className="dropdown-item text-white" href="index_3.html">Home 3</a></li>
                      <li><a className="dropdown-item text-white" href="index_4.html">Home 4</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item text-white" href="#">Business</a></li>
                  <li><a className="dropdown-item text-white" href="index_parallax.html">Parallax</a></li>
                  <li><a className="dropdown-item text-white" href="#">Portfolio</a></li>
                  <li><a className="dropdown-item text-white" href="#">One Page</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown me-2">
                <a className="nav-link text-dark" href="#" role="button" data-bs-toggle="dropdown">
                  BLOG
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li><a className="dropdown-item text-white" href="../blog/blog_small.html">Small Image</a></li>
                  <li><a className="dropdown-item text-white" href="../blog/blog_large.html">Large Image</a></li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle text-white" href="#">Grid style</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item text-white" href="../blog/blog_grid_2.html">2 Columns</a></li>
                      <li><a className="dropdown-item text-white" href="../blog/blog_grid_3.html">3 Columns</a></li>
                      <li><a className="dropdown-item text-white" href="index_4.html">Sidebar</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown me-2">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                  FORTFOLIO
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li><a className="dropdown-item text-white" href="#">Link</a></li>
                  <li><a className="dropdown-item text-white" href="#">Another link</a></li>
                  <li><a className="dropdown-item text-white" href="#">A third link</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown me-2">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                  SHOP
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li><a className="dropdown-item text-white" href="#">Link</a></li>
                  <li><a className="dropdown-item text-white" href="#">Another link</a></li>
                  <li><a className="dropdown-item text-white" href="#">A third link</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown me-2">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                  PAGES
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li><a className="dropdown-item text-white" href="#">Link</a></li>
                  <li><a className="dropdown-item text-white" href="#">Another link</a></li>
                  <li><a className="dropdown-item text-white" href="#">A third link</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown me-2">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                  FEATURES
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li><a className="dropdown-item text-white" href="#">Link</a></li>
                  <li><a className="dropdown-item text-white" href="#">Another link</a></li>
                  <li><a className="dropdown-item text-white" href="#">A third link</a></li>
                </ul>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="#" role="button">CONTACT</a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#" role="button">PURCHASE</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
