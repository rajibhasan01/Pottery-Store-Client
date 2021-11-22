import React, { useEffect } from 'react';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';
import Products from '../Home/Products/Products';
import './AllProducts.css';

const AllProducts = () => {

    useEffect(() => {
        document.title = "Products"
    }, []);

    return (
        <div className="marginTop" id="allProduct">
            <Navbar />
            <Products value={true} />
            <Footer />
        </div>
    );
};

export default AllProducts;