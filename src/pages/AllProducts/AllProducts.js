import React from 'react';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';
import Products from '../Home/Products/Products';
import './AllProducts.css';

const AllProducts = () => {
    return (
        <div className="marginTop">
            <Navbar />
            <Products value={true} />
            <Footer />
        </div>
    );
};

export default AllProducts;