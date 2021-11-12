import React from 'react';
import './Footer.css';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="footer-content">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 bg-transparent">

                        <div className="card bg-transparent border border-0 pt-5" style={{ width: "18rem" }}>
                            <img src="https://i.ibb.co/wSP3dDb/Pngtree-artistic-pottery-art-vector-logo-5007427-removebg-preview.png" className="card-img-top w-50" alt="..." />
                            <div className="card-body text-start ps-0">
                                <h5 className="card-title text-light">Pottery Shop<div className="spinner-grow indicator text-color" role="status">
                                    <span className="visually-hidden"></span>
                                </div></h5>
                                <p className="card-text text-secondary">For any query: 017540-63712  (10.00 Am - 09.00 Pm) <br /> or your can message at PSHelp to 26969 (24 x 7)</p>
                                <Link to="/about" className="text-decoration-none" id="bttnn">About us</Link>
                            </div>
                        </div>


                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8 email-box ps-lg-5">
                        <p className="text-secondary text-start mt-md-5 stylishFont">To know our lattest update, sign up here ...</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control bg-transparent border-top border-start border-bottom " placeholder="Enter your email here" aria-label="Recipient's username" aria-describedby="button-addons" />
                            <button className="btn btn-outline-secondary border" type="button" id="button-addons"> <div><i className="far fa-envelope"></i></div></button>
                        </div>

                        <div className="social-media-icon">
                            <i className="fab fa-facebook-square ic"></i>
                            <i className="fab fa-twitter ic"></i>
                            <i className="fas fa-share-square ic"></i>
                            <i className="fab fa-google-plus-g ic"></i>
                            <i className="fab fa-instalod ic"></i>
                            <i className="fab fa-tumblr-square ic"></i>

                        </div>

                        <div className="d-md-flex justify-content-between">
                            <Image src="https://stylemixthemes.com/wp/wp-content/uploads/sites/2/2019/06/599-Converted.png" className="googlePlay mt-2 py-3 pe-md-5" />

                            <Image src="https://e7.pngegg.com/pngimages/848/507/png-clipart-logo-brand-payment-product-design-paypal-text-payment.png" className="payWith mt-2 mt-md-0 ms-md-auto me-md-0" />
                        </div>

                    </div>
                </div>
                <hr className="text-light" />
                <div className="footer-text text-secondary pb-5">
                    <p>copywrite © 2021 - 2025 own by pottery shop</p>
                    <p>Privacy policy | Terms and conditions</p>
                </div>
            </div>

        </section>

    );
};

export default Footer;