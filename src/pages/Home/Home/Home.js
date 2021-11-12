import React from 'react';
import Navbar from '../../../components/Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Products />
            <Reviews />
        </div>
    );
};

export default Home;