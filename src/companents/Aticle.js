import React, { useEffect } from "react";
import '../styles/Aticle.css';

import img1 from '../img/p-225.jpg';
import img2 from '../img/p-223.jpg';
import img3 from '../img/p-224.jpg';
import img4 from '../img/p-222.jpg';
import img5 from '../img/p-217.jpg';
import img6 from '../img/p-218.jpg';
import img7 from '../img/p-219.jpg';
import img8 from '../img/p-220.jpg';

import browserImg from '../img/browser.png';
import tabletImg from '../img/tablet.png';
import brightnessImg from '../img/brightness.png';

import c201 from "../img/c-201.png";
        import c202 from "../img/c-202.png";
        import c203 from "../img/c-203.png";
        import c204 from "../img/c-204.png";
        import c205 from "../img/c-205.png";
        import c206 from "../img/c-206.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Aticle = () => {

    useEffect(() => {
        // Mảng các hình ảnh đã import
        const imagesSet = [
          [c201, c202, c203],
          [c204, c205, c206],
          [c201, c204, c204],
          [c206, c202, c201],
        ];
    
        const imgElements = [
          document.getElementById("img-1"),
          document.getElementById("img-2"),
          document.getElementById("img-3"),
          document.getElementById("img-4"),
        ];
    
        function getRandomTime() {
          return Math.floor(Math.random() * 5000) + 2000;
        }
    
        // Hàm thay đổi ảnh với thời gian ngẫu nhiên
        function changeImageRandomly(img, imgIndex) {
          const interval = getRandomTime(); // Thời gian ngẫu nhiên
          setTimeout(() => {
            img.classList.add("hidden"); // Làm mờ ảnh hiện tại
            setTimeout(() => {
              // Lấy ảnh tiếp theo ngẫu nhiên trong danh sách
              const newIndex = Math.floor(Math.random() * imagesSet[imgIndex].length);
              img.src = imagesSet[imgIndex][newIndex];
              img.classList.remove("hidden"); // Hiển thị ảnh mới
            }, 800); // Thời gian mờ (phù hợp với CSS)
            changeImageRandomly(img, imgIndex); // Lặp lại
          }, interval);
        }
    
        // Khởi động cho tất cả các ảnh
        imgElements.forEach((img, i) => {
          changeImageRandomly(img, i);
        });
      }, []);


    return (
        <>
            {/* Section 1 */}
            <section className="c">
                <div className="container p-5">
                    <div className="row mt-3">
                        <div className="col-lg-4 mb-3">
                            <div className="row">
                                <div className="col-3">
                                    <div className="icon text-center p-2">
                                        <i style={{ fontSize: '40px' }} className="bi bi-cloud-arrow-down-fill"></i>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <h4 className="box-title-2">Free Updates</h4>
                                    <p className="alhpa">Lorem ipsum dolor sit amet, consect adipisicing elit lorem ipsum!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="row">
                                <div className="col-3">
                                    <div className="icon text-center p-2">
                                        <i style={{ fontSize: '40px' }} className="bi bi-journal-text"></i>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <h4 className="box-title-2">Detailed Documentation</h4>
                                    <p className="alhpa">Lorem ipsum dolor sit amet, consect adipisicing elit lorem ipsum!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-3">
                                    <div className="icon text-center p-2">
                                        <i style={{ fontSize: '40px' }} className="bi bi-chat-dots-fill"></i>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <h4 className="box-title-2">Friendly Support</h4>
                                    <p className="alhpa">Lorem ipsum dolor sit amet, consect adipisicing elit lorem ipsum!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="large-padding custom-bg custom-bg2 bg-right parallax">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 m-5">
                            <h2 className="section-title st2 text-left mb25 color-default my-4">Responsive Design</h2>
                            <p className="mb25 color-default my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                                quae aliquid quod excepturi, est, nulla animi, saepe asperiores dolorem odit adipisci.</p>
                            <p className="color-default my-4"><i className="bi bi-check-square"></i> &nbsp; Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.</p>
                            <p className="color-default my-4"><i className="bi bi-database-fill"></i> &nbsp; Odit voluptatibus quos,
                                repellendus consequatur.</p>
                            <p className="color-default my-4"><i className="bi bi-pencil-square"></i> &nbsp; Iusto quo excepturi
                                officiis eveniet deserunt.</p>
                            <p className="color-default my-4"><i className="bi bi-graph-up-arrow"></i> &nbsp; Ipsam nulla hic maxime
                                voluptates accusamus illum alias.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section className="section-3">
                <div id="section-3" className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <div className="row justify-content-center text-center p-4">
                                <div className="col-6 col-md-6 p-3">
                                    <div id="c-1" className="client">
                                        <img src={c201} className="img-fluid fade-image" alt="Client Logo 1" id="img-1" />
                                    </div>
                                </div>
                                <div className="col-6 col-md-6 p-3">
                                    <div id="c-2" className="client">
                                        <img src={c202} className="img-fluid fade-image" alt="Client Logo 2" id="img-2" />
                                    </div>
                                </div>
                                <div className="col-6 col-md-6 p-3">
                                    <div id="c-3" className="client">
                                        <img src={c203} className="img-fluid fade-image" alt="Client Logo 3" id="img-3" />
                                    </div>
                                </div>
                                <div className="col-6 col-md-6 p-3 d-none d-md-block">
                                    <div id="c-4" className="client">
                                        <img src={c204} className="img-fluid fade-image" alt="Client Logo 4" id="img-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 bg-white ms-auto rounded-left"
                            style={{ borderTopLeftRadius: '20%', borderBottomLeftRadius: '20%', backgroundColor: 'rgba(255, 255, 255, 0.9) !important', padding: '120px' }}>
                            <h2 className="section-title text-left mb-4 color-dark">About <span className="main-text">us</span></h2>
                            <p className="color-default mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                                assumenda, alias, earum vel molestias quia. Vitae ullam, modi ex dolorum! Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit. Aut aspernatur laborum consectetur isas.</p>
                            <h3 className="box-title color-dark mb-4">Satisfied Customers</h3>
                            <p className="color-default mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
                                ipsum, cumque! Voluptas omnis voluptatem, natus. Vero dolores laboriosam explicabo, iusto.</p>
                            <a href="#" className="read-more text-decoration-none text-success ">Read More <i className="ps-2 bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 4 */}
            <section className="section">
                <div className="container p-5">
                    <div className="row my-5">
                        <div className="col-sm-5">
                            <h2 className="section-title st2 mb-5 color-default text-left">
                                Featured projects
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                                laborum pariatur, iusto eveniet deleniti, optio voluptas quae
                                fugiat earum sit ratione natus. Magni nulla accusantium!
                            </p>
                        </div>
                        <div className="col-sm-7">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h3 className="box-title mb-5">
                                        <i
                                            className="bi bi-cloud-download-fill bg-danger px-2 py-1 text-white"
                                            style={{ borderRadius: "8px" }}
                                        ></i>{" "}
                                        &nbsp; Every project
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Nobis maiores repudiandae, accusantium reiciendis commodi!
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <h3 className="box-title mb-5">
                                        <i
                                            className="bi bi-cloud-upload-fill bg-danger px-2 py-1 text-white"
                                            style={{ borderRadius: "8px" }}
                                        ></i>{" "}
                                        &nbsp; is Featured
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Nobis maiores repudiandae, accusantium reiciendis commodi!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 5 */}
            <section className="image">
                <div className="container-fluid">
                    <div className="row g-0">
                        {images.map((img, index) => (
                            <div key={index} className="col-6 col-md-3">
                                <div className="image-container">
                                    <img src={img} className="img-fluid" alt={`Image ${index + 1}`} />
                                    <div className="overlay">
                                        <i className="bi bi-search"></i>
                                        <i className="bi bi-download"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Section 6 */}
            <section className="c">
                <div className="container p-5 text-white text-center">
                    <h2 className="section-title mt-2 mb-5">
                        If you like what we have done, it is worth to see more!
                    </h2>
                    <a href="#" className="text-decoration-none p-2 mb-3">
                        SEE MORE PROJECTS
                    </a>
                </div>
            </section>
            {/* Section 7 */}
            <section>
                <div className="container-fluid p-5" style={{ backgroundColor: 'rgb(243, 243, 243)' }}>
                    <div className="row p-5">
                        <div className="col-sm-6 col-md-6">
                            <div className="row">
                                <div className="col-sm-3 text-end mt-5">
                                    <img src={browserImg} alt="" />
                                </div>
                                <div className="col-sm-9 mt-5">
                                    <div className="box-right">
                                        <h3 className="box-title bt3">Cross Browser</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim temporibus quae, aliquid! Ipsam officiis obcaecati beatae!</p>
                                    </div>
                                </div>

                                <div className="col-sm-3 text-end mt-5">
                                    <img src={tabletImg} alt="" />
                                </div>
                                <div className="col-sm-9 mt-5">
                                    <div className="box-right">
                                        <h3 className="box-title bt3">Mobile Friendly</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim temporibus quae, aliquid! Ipsam officiis obcaecati beatae!</p>
                                    </div>
                                </div>

                                <div className="col-sm-3 text-end mt-5">
                                    <img src={brightnessImg} alt="" />
                                </div>
                                <div className="col-sm-9 mt-5">
                                    <div className="box-right">
                                        <h3 className="box-title bt3">Top notch Support</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim temporibus quae, aliquid! Ipsam officiis obcaecati beatae!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6">
                            <div className="row">
                                <div className="col-sm-12 mt-5">
                                    <h3 className="box-title mb-4">Why should you choose us?</h3>
                                    <p style={{ width: '80%' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloremque, aperiam nemo doloribus laboriosam non officiis obcaecati beatae dolorum.
                                    </p>
                                </div>
                                <div className="col-sm-12 col-md-6" style={{ width: '45%' }}>
                                    <div className="feature-list d-flex align-items-center mt-4" style={{ height: '30px' }}>
                                        <i className="bi bi-check" style={{ fontSize: '30px', color: 'rgb(6, 97, 97)' }}></i>
                                        <p className="mb-0 d-flex align-items-center" style={{ marginLeft: '10px' }}>Tons of elements</p>
                                    </div>
                                    <div className="feature-list d-flex align-items-center my-2" style={{ height: '30px' }}>
                                        <i className="bi bi-check" style={{ fontSize: '30px', color: 'rgb(6, 97, 97)' }}></i>
                                        <p className="mb-0 d-flex align-items-center" style={{ marginLeft: '10px' }}>Unlimited Colors</p>
                                    </div>
                                    <div className="feature-list d-flex align-items-center my-2" style={{ height: '30px' }}>
                                        <i className="bi bi-check" style={{ fontSize: '30px', color: 'rgb(6, 97, 97)' }}></i>
                                        <p className="mb-0 d-flex align-items-center" style={{ marginLeft: '10px' }}>Fiendly Support</p>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6">
                                    <div className="feature-list d-flex align-items-center mt-4" style={{ height: '30px' }}>
                                        <i className="bi bi-check" style={{ fontSize: '30px', color: 'rgb(6, 97, 97)' }}></i>
                                        <p className="mb-0 d-flex align-items-center" style={{ marginLeft: '10px' }}>Boxed / Wide Layout</p>
                                    </div>
                                    <div className="feature-list d-flex align-items-center my-2" style={{ height: '30px' }}>
                                        <i className="bi bi-check" style={{ fontSize: '30px', color: 'rgb(6, 97, 97)' }}></i>
                                        <p className="mb-0 d-flex align-items-center" style={{ marginLeft: '10px' }}>Detailed Documentation</p>
                                    </div>
                                    <div className="feature-list d-flex align-items-center my-2" style={{ height: '30px' }}>
                                        <i className="bi bi-check" style={{ fontSize: '30px', color: 'rgb(6, 97, 97)' }}></i>
                                        <p className="mb-0 d-flex align-items-center" style={{ marginLeft: '10px' }}>Free Updates</p>
                                    </div>
                                </div>

                                <div className="col-sm-12 mt-5">
                                    <div className="alert alert-2 alert-dismissable bg-danger d-flex align-items-center" style={{ width: '80%' }}>
                                        <i className="bi bi-cloud-upload-fill text-white me-4" style={{ fontSize: '30px' }}></i>
                                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae molestiae facere suscipit harum quae ab ipsum.</p>
                                        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 8 */}
            <section className="d">
                <div className="container text-center" style={{ marginTop: '100px', marginBottom: '100px' }}>
                    <div id="d" className="row my-5">
                        <div className="col-sm-4 border-right">
                            <div className="box-content">
                                <i className="bi bi-cloud-fill p-4 circle-icon"></i>
                                <h3 className="my-4">Knowledgebase</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti, quasi dolorum.</p>
                            </div>
                        </div>
                        <div className="col-sm-4 border-right">
                            <div className="box-content">
                                <i className="bi bi-chat-fill p-4 circle-icon"></i>
                                <h3 className="my-4">Knowledgebase</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti, quasi dolorum.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="box-content">
                                <i className="bi bi-envelope-fill p-4 circle-icon"></i>
                                <h3 className="my-4">Knowledgebase</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corrupti, quasi dolorum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 9 */}
            <section className="e">
                <div className="container-fuild p-5">
                    <div className="row px-5">
                        <div className="col-sm-12 col-md-6 text-white my-5">
                            <h2 className="section-title text-left mt-3 mb-4">Get in touch with us</h2>
                            <p className="contact-p mb-5" style={{ width: '85%' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sunt nemo enim pariatur nesciunt id voluptatibus non!
                            </p>
                            <address className="mb-5">
                                <p>
                                    <i className="bi bi-geo-alt-fill me-2" style={{ alignItems: 'center', justifyContent: 'center', height: '40px', width: '40px', backgroundColor: 'green', padding: '8px', borderRadius: '8px' }}></i> 1800 Los Angeles, USA
                                </p>
                                <p className="my-4">
                                    <i className="bi bi-telephone-fill me-2" style={{ alignItems: 'center', justifyContent: 'center', height: '40px', width: '40px', backgroundColor: 'green', padding: '8px', borderRadius: '8px' }}></i> 0 800-55-22-55
                                </p>
                                <p>
                                    <i className="bi bi-envelope-fill me-2" style={{ alignItems: 'center', justifyContent: 'center', height: '40px', width: '40px', backgroundColor: 'green', padding: '8px', borderRadius: '8px' }}></i> support@company.com
                                </p>
                            </address>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="contact-tab" data-bs-toggle="tab" href="#contact-form" role="tab" aria-controls="contact-form" aria-selected="true">Contact</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="subscribe-tab" data-bs-toggle="tab" href="#subscribe-form" role="tab" aria-controls="subscribe-form" aria-selected="false">Subscribe</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-6 my-5">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="contact-form" role="tabpanel" aria-labelledby="contact-tab">
                                    <form className="contact-form" action="#" method="POST">
                                        <h3 className="section-title mb-3 text-white">Contact</h3>
                                        <div className="input-box mb-3">
                                            <input type="text" className="form-control" placeholder="Your name" />
                                            <i class="bi bi-person-fill"></i>
                                        </div>
                                        <div className="input-box mb-3">
                                            <input type="email" className="form-control" placeholder="Your email" />
                                            <i class="bi bi-envelope-fill"></i>
                                        </div>
                                        <div className="input-box mb-3">
                                            <textarea className="form-control" rows="3" placeholder="Your message"></textarea>
                                            <i class="bi bi-list"></i>
                                        </div>
                                        <button className="btn btn-success" type="submit">Send message</button>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="subscribe-form" role="tabpanel" aria-labelledby="subscribe-tab">
                                    <form className="contact-form" action="#" method="POST">
                                        <h3 className="section-title mb-3 text-white">Subscribe</h3>
                                        <div className="input-box mb-3">
                                            <input type="email" className="form-control" placeholder="Enter your email to subscribe" />
                                        </div>
                                        <button className="btn btn-success" type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};


export default Aticle;



