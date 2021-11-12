import React from 'react';
import Footer from '../../../components/Shared/Footer/Footer';
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
            <Footer />
        </div>
    );
};

export default Home;