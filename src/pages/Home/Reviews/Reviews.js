import React from 'react';
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Review from '../Review/Review';

const Reviews = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
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
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    const rows = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <Container className="text-center my-5 py-5 sliderContainer">
            <h1 className="shadowsFont">Customer Review</h1>
            <hr className="hr-style mx-auto" />
            <p className="robotoFont">Some of our customer feedback here</p>

            <Slider {...settings}>

                {
                    rows.map(review => <Review
                        key={review}
                        value={review}
                    />)
                }

            </Slider>
        </Container>
    );
};

export default Reviews;