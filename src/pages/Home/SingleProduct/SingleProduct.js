import React, { useEffect, useState } from 'react';
import Footer from '../../../components/Shared/Footer/Footer';
import Navbar from '../../../components/Shared/Navbar/Navbar';
import './SingleProduct.css';
import * as GoIcons from 'react-icons/go';
import { Col, Form, Row } from 'react-bootstrap';
import * as MdIconName from "react-icons/md";
import SimilarProducts from '../../SimilarProducts/SimilarProducts';
import { Link } from 'react-router-dom';


const SingleProduct = () => {
    let price = 200;
    let quantity = 1;
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState({ size: 'sm', price, quantity });


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newValue = { ...cart }
        newValue[field] = value;
        setCart(newValue);
        setCount(count + 1);
    }

    const handleQuantity = e => {
        const field = e.target.name;
        const newQuantity = { ...cart };

        if (cart.quantity > 0) {

            if (field === 'minus' && cart.quantity > 1) {
                newQuantity.quantity -= 1;
            }
            if (field === 'plus') {
                newQuantity.quantity += 1;
            }

            setCart(newQuantity);
            setCount(count + 1);
        }
    }

    useEffect(() => {
        const newCart = { ...cart };
        if (newCart.size === 'sm') {
            newCart.price = 200;
        }

        else if (newCart.size === 'lg') {
            newCart.price = 300;
        }

        else if (newCart.size === 'xl') {
            newCart.price = 350;
        }

        const totalPrice = newCart.price * newCart.quantity;
        newCart.price = totalPrice;

        setCart(newCart);
        console.log(newCart);


    }, [count]);

    const haneldeSizeSelection = e => {
        e.preventDefault();
    }

    return (
        <div className="">
            <Navbar />
            <div className="container topMargin pb-5 mb-5">
                <div className="row g-4">

                    <div className="col-md-6 text-center imgContainer">
                        <div className="d-flex flex-column align-items-center">
                            <img src="https://www.veniceclayartists.com/wp-content/uploads/2012/01/475px-475px-MVictorinoWV590.jpg" className="w-50 pb-2 cursor-pointer" alt="" />

                            <img src="https://www.veniceclayartists.com/wp-content/uploads/2012/01/475px-475px-MVictorinoWV590.jpg" className="w-50 pb-2 cursor-pointer" alt="" />

                            <img src="https://www.veniceclayartists.com/wp-content/uploads/2012/01/475px-475px-MVictorinoWV590.jpg" className="w-50 cursor-pointer" alt="" />
                        </div>

                        <img src="https://www.veniceclayartists.com/wp-content/uploads/2012/01/475px-475px-MVictorinoWV590.jpg" className="singleImage pe-3 pe-md-2" alt="" />

                    </div>


                    <div className="col-md-6">
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
                            <Form.Group as={Row} className="mb-3" onSubmit={haneldeSizeSelection}>
                                <h5 className="shadowsFont text-muted">Select Size</h5>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Small"
                                        name="size"
                                        value='sm'
                                        id="formHorizontalRadios1"
                                        defaultChecked
                                        onChange={handleOnChange}

                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Large"
                                        name="size"
                                        value='lg'
                                        id="formHorizontalRadios2"
                                        onChange={handleOnChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Extra Large"
                                        name="size"
                                        value='xl'
                                        id="formHorizontalRadios3"
                                        onChange={handleOnChange}
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <div className="mt-2">
                            <h5 className="shadowsFont text-muted">Quantity</h5>
                            <div className="d-flex">
                                <button
                                    className="btn btnContainer px-3"
                                    name='minus'
                                    onClick={handleQuantity}
                                >-</button>
                                <div className="my-auto mx-3">{cart.quantity}</div>
                                <button
                                    className="btn btnContainer px-3"
                                    name='plus'
                                    onClick={handleQuantity}
                                >+</button>
                            </div>
                        </div>

                        <div className="my-3">
                            <h5 className="shadowsFont fw-normal text-muted">Price: <span className="robotoFont fs-6 text-info fw-bold ms-0">${cart.price}</span></h5>
                        </div>

                        <Link className="text-decoration-none login-cursor bg-dark px-2 py-1 text-white rounded fs-6 read-more" to={`/placeorder`}>Place Order<MdIconName.MdDoubleArrow className="fs-5 icon-background ms-2" /> </Link>
                    </div>
                </div>
            </div>
            <SimilarProducts />

            <Footer />
        </div>
    );
};

export default SingleProduct;