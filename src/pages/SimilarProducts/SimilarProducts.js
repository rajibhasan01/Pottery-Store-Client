import React from 'react';
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from '../Home/Product/Product';
import useData from '../../hooks/useData';

const SimilarProducts = () => {
    const [items] = useData();

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (
        <Container fluid className="text-start my-5 py-5 px-md-5 sliderContainer">
            <h1 className="shadowsFont ps-3">Similar Products</h1>
            <p className="shadowsFont ps-3">Some of our customer feedback here</p>
            <hr />

            <Slider {...settings}>

                {
                    items.map(item => <Product
                        key={item.product_code}
                        spd={true}
                        value={true}
                        item={item}
                    />)
                }

            </Slider>
        </Container>
    );
};

export default SimilarProducts;