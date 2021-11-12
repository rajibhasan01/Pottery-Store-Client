import React from 'react';
import Footer from '../../../components/Shared/Footer/Footer';
import Navbar from '../../../components/Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <div className="HomeBackground">
            <Navbar />
            <Banner />
            <Products />
            <Blogs />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;