import React from 'react';
import './Product.css';
import { Card, Col } from 'react-bootstrap';
import * as MdIconName from "react-icons/md";
import { Link } from 'react-router-dom';


const Product = ({ value, spd, item }) => {
    const { product_discount, product_image, product_name, product_price, product_ratings, product_title, product_type } = item;

    return (
        <Col>
            <Card className={value ? "border-0 p-3 text-start card-container HomeBackground mb-4" : "border-0 p-0 text-start card-container HomeBackground mb-4"}>
                <div className="image-box imgContainer">
                    <Card.Img variant="top" className="card-image hoverImage blogImage" src={product_image} />

                    <div className="middle">
                        <p>For more info click details</p>
                        <Link className="text-decoration-none login-cursor bg-dark px-2 text-white rounded fs-6 read-more" to={`/products/${item._id}`}>Details<MdIconName.MdDoubleArrow className="fs-5 icon-background ms-2" /> </Link>
                    </div>
                </div>

                {
                    product_discount !== 0 && <Card.Text className="discountProduct">-{product_discount}</Card.Text>
                }

                {
                    spd ? <Card.Text className="text-white img-text-bg2 py-2 text-center ">New <span className="d-none d-sm-inline"> - </span> <span className="text-background text-white pe-3 d-block d-sm-inline"><MdIconName.MdPlace /> {product_type} </span>
                    </Card.Text>
                        :
                        <Card.Text className="text-white img-text-bg py-2 d-flex justify-content-between px-2">New Arrival <span> - </span> <span className="text-background text-white pe-3"><MdIconName.MdPlace /> {product_type}</span></Card.Text>
                }

                <Card.Body className="ps-0">

                    {
                        value ? <> <Card.Title className="text-title">{product_name}</Card.Title>
                            <Card.Text className="text-muted text-justify">{product_title.slice(0, 45)} .....</Card.Text> </>
                            :
                            <> <Card.Title className="text-title">{product_name}</Card.Title>
                                <Card.Text className="text-muted text-justify">{product_title}</Card.Text> </>


                    }

                    <Card.Text className="text-black d-flex justify-content-between align-items-center"><span className="ps-0 ms-0 text-title">
                        ${product_price.sm} USD</span> <span><MdIconName.MdOutlineStarHalf className="fs-5 text-title" /><small className="py-2 text-title"> {product_ratings}</small></span>
                    </Card.Text>

                    <Link className="text-decoration-none login-cursor bg-dark px-2 text-white rounded fs-6 read-more" to={`/products/${item._id}`}>Buy Now<MdIconName.MdDoubleArrow className="fs-5 icon-background ms-2" /> </Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;