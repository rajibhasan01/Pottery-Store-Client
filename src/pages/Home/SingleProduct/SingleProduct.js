import React, { useEffect, useState } from 'react';
import Footer from '../../../components/Shared/Footer/Footer';
import Navbar from '../../../components/Shared/Navbar/Navbar';
import './SingleProduct.css';
import * as GoIcons from 'react-icons/go';
import { Col, Form, Row } from 'react-bootstrap';
import * as MdIconName from "react-icons/md";
import SimilarProducts from '../../SimilarProducts/SimilarProducts';
import { useHistory, useParams } from 'react-router';


const SingleProduct = () => {
    const { productID } = useParams();
    const [singleItem, setSingleItem] = useState({});

    const { product_discount, product_code, product_image, product_name, product_price, product_ratings, product_title, product_type, product_details } = singleItem;

    let price = product_price;
    let amount = product_price;
    let discount = product_discount;
    let discount_amount = product_discount;
    const product_id = productID;
    const status = "Pending";

    let quantity = 1;
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState({ product_id, size: 'sm', price, discount, discount_amount, amount, quantity, status, product_code });

    const history = useHistory();


    useEffect(() => {
        const url = `https://immense-mountain-96317.herokuapp.com/products/${productID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleItem(data))
    }, [productID]);


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
            newCart.price = price?.sm;
        }

        else if (newCart.size === 'lg') {
            newCart.price = price?.lg;
        }

        else if (newCart.size === 'xl') {
            newCart.price = price?.xl;
        }

        newCart.discount = product_discount;

        const totalPrice = newCart.price * newCart.quantity;
        newCart.amount = totalPrice;


        const totalDiscount = newCart.discount * 0.01 * newCart.amount;
        newCart.discount_amount = newCart.amount - totalDiscount;

        newCart.product_code = product_code;

        setCart(newCart);
        console.log("newCart =>", newCart);


    }, [price?.sm, price?.lg, price?.xl, discount, discount_amount, amount, count, product_code, product_discount]);


    const handlePlaceOrder = () => {
        console.log("button press", cart);
        const sessionCart = JSON.stringify(cart);
        sessionStorage.setItem('cart', sessionCart);
        history.push('/placeorder');
    }



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
                            <img src={product_image} className="w-50 pb-2 cursor-pointer" alt="" />

                            <img src={product_image} className="w-50 pb-2 cursor-pointer" alt="" />

                            <img src={product_image} className="w-50 cursor-pointer" alt="" />
                        </div>

                        <img src={product_image} className="singleImage pe-3 pe-md-2" alt="" />

                    </div>


                    <div className="col-md-6">
                        <h2 className="robotoFont">Customize your {product_name} - <span className="text-danger ms-0">{product_type}</span></h2>
                        <p className="robotoFont text-warning mb-0">{product_title}</p>
                        <small className="shadowsFont fw-light">
                            {product_details}
                            {
                                cart.discount && <span className="shadowsFont px-2 rounded bg-danger text-white">{cart.discount}% off</span>
                            }
                        </small>

                        <div className="rating-star mt-2">
                            <small className="text-muted shadowsFont">Reviews {product_ratings}</small>
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
                            <h5 className="shadowsFont fw-normal text-muted">Price: <span className="robotoFont fs-6 text-info fw-bold ms-0">${cart.amount}</span></h5>

                            <h5 className="shadowsFont fw-bold text-warning">Discount Price: <span className="robotoFont fs-6 text-info fw-bold ms-0">${cart.discount_amount}</span></h5>
                        </div>

                        <button className="text-decoration-none login-cursor bg-dark px-2 text-white rounded fs-6 read-more" onClick={handlePlaceOrder}>Place Order<MdIconName.MdDoubleArrow className="fs-5 icon-background ms-2" /> </button>
                    </div>
                </div>
            </div>
            <SimilarProducts />

            <Footer />
        </div>
    );
};

export default SingleProduct;