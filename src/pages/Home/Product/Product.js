import React from 'react';
import './Product.css';
import { Card, Col } from 'react-bootstrap';
import * as MdIconName from "react-icons/md";
import { Link } from 'react-router-dom';


const Product = ({ value, spd }) => {
    return (
        <Col>
            <Card className={value ? "border-0 p-3 text-start card-container HomeBackground mb-4" : "border-0 p-0 text-start card-container HomeBackground mb-4"}>
                <div className="image-box imgContainer">
                    <Card.Img variant="top" className="card-image hoverImage blogImage" src="https://www.veniceclayartists.com/wp-content/uploads/2012/01/475px-475px-MVictorinoWV590.jpg" />

                    <div className="middle">
                        <p>For more info click details</p>
                        <Link className="text-decoration-none login-cursor bg-dark px-2 text-white rounded fs-6 read-more" to={`/singleproducts`}>Details<MdIconName.MdDoubleArrow className="fs-5 icon-background ms-2" /> </Link>
                    </div>
                </div>

                <Card.Text className="discountProduct">-17%</Card.Text>

                {
                    spd ? <Card.Text className="text-white img-text-bg2 py-2 text-center">New Arrival <span className="d-none d-sm-inline"> - </span> <span className="text-background text-white pe-3 d-block d-sm-inline"><MdIconName.MdPlace /> Style </span>
                    </Card.Text>
                        :
                        <Card.Text className="text-white img-text-bg py-2 text-center">New Arrival <span> - </span> <span className="text-background text-white pe-3"><MdIconName.MdPlace /> Style </span> - <span className="text-white d-none d-md-inline">Skiing</span></Card.Text>
                }

                <Card.Body className="ps-0">

                    {
                        !spd && <> <Card.Title className="text-title">Soil Made Pottery</Card.Title>
                            <Card.Text className="text-muted text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its</Card.Text> </>

                    }

                    <Card.Text className="text-black d-flex justify-content-between align-items-center"><span className="ps-0 ms-0 text-title">
                        $40.00 USD</span> <span><MdIconName.MdOutlineStarHalf className="fs-5 text-title" /><small className="py-2 text-title"> 6.7</small></span>
                    </Card.Text>

                    <Link className="text-decoration-none login-cursor bg-dark px-2 text-white rounded fs-6 read-more" to={`/placeorder`}>Buy Now<MdIconName.MdDoubleArrow className="fs-5 icon-background ms-2" /> </Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;