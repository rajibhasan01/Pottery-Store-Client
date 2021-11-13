import React from 'react';
import './Banner.css';
import * as GaIcons from 'react-icons/gi';
import { useHistory } from 'react-router';


const Banner = () => {
    const history = useHistory();

    const handleViewAllProducts = () => {
        history.push('./allproducts');
    }

    return (
        <div className="">
            <section className="home border-0" id="home">

                <div className="content ps-5 ">
                    <h3 className="Btext-color dancingFont">Welcome to<span className="dancingFont">HandMade</span><span className="text-white ms-0 dancingFont"> Pottery</span><GaIcons.GiPaintedPottery /> Store</h3>
                    <button onClick={handleViewAllProducts} className="btn rounded border-0 px-5 btnColor fw-normal">View All Products</button>
                </div>

            </section>


        </div>
    );
};

export default Banner;