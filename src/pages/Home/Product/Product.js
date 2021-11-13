import React from 'react';
import './Product.css';
import { Card, Col } from 'react-bootstrap';
import * as MdIconName from "react-icons/md";
import { Link } from 'react-router-dom';


const Product = ({ value }) => {
    return (
        <Col>
            <Card className={value ? "border-0 p-3 text-start card-container HomeBackground mb-4" : "border-0 p-0 text-start card-container HomeBackground mb-4"}>
                <div className="image-box">
                    <Card.Img variant="top" className="card-image hoverImage" src="https://www.veniceclayartists.com/wp-content/uploads/2012/01/475px-475px-MVictorinoWV590.jpg" />
                </div>

                <Card.Text className="discountProduct">-17%</Card.Text>

                <Card.Text className="text-white img-text-bg py-2 text-center">New Arrival <span> - </span> <span className="text-background text-white pe-3"><MdIconName.MdPlace /> Style </span> - <span className="text-white d-none d-md-inline">Skiing</span></Card.Text>

                <Card.Body className="ps-0">

                    <Card.Title className="text-title">Soil Made Pottery</Card.Title>
                    <Card.Text className="text-muted text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its</Card.Text>

                    <Card.Text className="text-black d-flex justify-content-between align-items-center"><span className="ps-0 ms-0 text-title">
                        $40.00 USD</span> <span><MdIconName.MdOutlineStarHalf className="fs-5 text-title" /><small className="py-2 text-title"> 6.7</small></span></Card.Text>

                    <Link className="text-decoration-none login-cursor text-secondary fs-6 mt-4 read-more" to={`/tourplaces/`}>View Package <MdIconName.MdDoubleArrow className="fs-5 icon-background ms-2" /> </Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;