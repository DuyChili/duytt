import React from 'react';
import img1 from '../img/15647274066_2ee48c3fe9_s.jpg';
import img2 from '../img/15485436268_846ccca178_s.jpg';
import img3 from '../img/15668911091_4ef20118b5_s.jpg';
import img4 from '../img/15484954949_a4e97a9dc5_s.jpg';
import img5 from '../img/15668909741_eaf3db4054_s.jpg';

const Footer = () => {
  return (
    <section className="footer">
      <div className="container-fluid text-white" style={{ backgroundColor: 'rgb(48, 48, 48)' }}>
        <p className="bg-success" style={{ padding: '2px' }}></p>
        <div className="container">
          <div className="row pt-3">
            <div className="col-sm-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, at.</p>
            </div>
            <div className="col-sm-6 text-end">
              <i className= "bi bi-facebook p-2 me-2 bg-dark" style={{ borderRadius: '3px', fontSize: '16px' }}></i>
              <i className="bi bi-twitter p-2 me-2 bg-dark" style={{ borderRadius: '3px', fontSize: '16px' }}></i>
              <i className="bi bi-google p-2 me-2 bg-dark" style={{ borderRadius: '3px', fontSize: '16px' }}></i>
              <i className="bi bi-twitch p-2 me-2 bg-dark" style={{ borderRadius: '3px', fontSize: '16px' }}></i>
              <i className="bi bi-wifi p-2 me-2 bg-dark" style={{ borderRadius: '3px', fontSize: '16px' }}></i>
            </div>
          </div>
          <hr />
          <div className="row pb-5">
            <div className="col-sm-6">
              <h3 className="widget-title mt-5">About us</h3>
              <p className="mt-4 mb-4" style={{ width: '85%' }}>
                Lorem ipsum dolor sit amet domo, consectetur adipisicing elit. Magnam, aliquam? Sequi dolore alias
                voluptate officiis nemo natus dolorum.
              </p>
              <p>
                <i
                  className="bi bi-geo-alt-fill me-2"
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '40px',
                    width: '40px',
                    backgroundColor: 'green',
                    padding: '8px',
                    borderRadius: '8px',
                  }}
                ></i>
                1800 Los Angeles, USA
              </p>
              <p className="mt-4">
                <i
                  className="bi bi-telephone-fill me-2"
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '40px',
                    width: '40px',
                    backgroundColor: 'green',
                    padding: '8px',
                    borderRadius: '8px',
                  }}
                ></i>
                0 800-55-22-55
              </p>
            </div>
            <div className="col-sm-3">
              <h3 className="widget-title mt-5 mb-4">Latest posts</h3>
              <p>
                <a className="text-white text-decoration-none mb-5" href="#">
                  <i className="bi bi-wordpress text-success me-2"></i> About Wordpress themes
                </a>
              </p>
              <p>
                <a className="text-white text-decoration-none mb-5" href="#">
                  <i className="bi bi-journal text-success me-2"></i> Why choose Joomla
                </a>
              </p>
              <p>
                <a className="text-white text-decoration-none mb-5" href="#">
                  <i className="bi bi-journal text-success me-2"></i> Drupal is better
                </a>
              </p>
              <p>
                <a className="text-white text-decoration-none" href="#">
                  <i className="bi bi-camera-fill text-success me-2 "></i> Magento vs. OpenCart
                </a>
              </p>
            </div>
            <div className="col-sm-3">
              <h3 className="widget-title mt-5 mb-4">Flickr photos</h3>
              <div className="img">
                <div className="row">
                  <div className="col-sm-4 col-md-3">
                    <img src={img1} alt="" />
                  </div>
                  <div className="col-sm-4 col-md-3">
                    <img src={img2} alt="" />
                  </div>
                  <div className="col-sm-4 col-md-3">
                    <img src={img3} alt="" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4 col-md-3">
                    <img src={img4} alt="" />
                  </div>
                  <div className="col-sm-4 col-md-3">
                    <img src={img2} alt="" />
                  </div>
                  <div className="col-sm-4 col-md-3">
                    <img src={img5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-footer pt-4 pb-2 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <p>© Copyright 2014 - 2022 shiftThemes</p>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-end">
              <a className="nav-link me-4" href="#" role="button">
                Home
              </a>
              <a className="nav-link me-4" href="#" role="button">
                Contact
              </a>
              <a className="nav-link me-4" href="#" role="button">
                Events
              </a>
              <a className="nav-link me-4" href="#" role="button">
                News
              </a>
              <a className="nav-link me-4" href="#" role="button">
                Terms
              </a>
              <a className="nav-link me-4" href="#" role="button">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
