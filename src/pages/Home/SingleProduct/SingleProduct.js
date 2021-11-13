import React from 'react';
import Footer from '../../../components/Shared/Footer/Footer';
import Navbar from '../../../components/Shared/Navbar/Navbar';
import './SingleProduct.css';
import * as GoIcons from 'react-icons/go';
import { Col, Form, Row } from 'react-bootstrap';
import * as MdIconName from "react-icons/md";


const SingleProduct = () => {
    return (
        <div className="">
            <Navbar />
            <div className="container topMargin pb-5 mb-5">
                <div className="row">
                    <div className="col-6 imgContainer">
                        <img src="https://www.veniceclayartists.com/wp-content/uploads/2012/01/475px-475px-MVictorinoWV590.jpg" className="singleImage" alt="" />
                    </div>
                    <div className="col-6">
                        <h1 className="robotoFont">Customize your Blue Pot</h1>
                        <small className="robotoFont fw-light">
                            Apple M1 chip with 8-core CPU with 4 performace cores and 4 efficiency
                            cores, 7-core GPU, and 16-core Neural Engine 8GB unified memory 245GB
                            SSD storage Two Thunderbolt / USB 4 ports Magic Mouse Magic Kewboard -
                            US English
                        </small>

                        <div className="rating-star mt-2">
                            <small className="text-muted shadowsFont">Reviews</small>
                            <div className="">
                                <GoIcons.GoStar />
                                <GoIcons.GoStar />
                                <GoIcons.GoStar />
                                <GoIcons.GoStar />
                                <GoIcons.GoStar />
                            </div>
                        </div>

                        <fieldset className="mt-3">
                            <Form.Group as={Row} className="mb-3">
                                <h5 className="shadowsFont text-muted">Select Size</h5>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Small"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"

                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Large"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Extra Large"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <div className="mt-2">
                            <h5 className="shadowsFont text-muted">Quantity</h5>
                            <div className="d-flex">
                                <button className="btn btnContainer px-3">-</button>
                                <div className="my-auto mx-3">2</div>
                                <button className="btn btnContainer px-3">+</button>
                            </div>
                        </div>

                        <button className="text-decoration-none login-cursor bg-dark px-2 text-white rounded fs-6 read-more mt-5">Buy N ow<MdIconName.MdDoubleArrow className="fs-5 icon-background ms-2" /> </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SingleProduct;