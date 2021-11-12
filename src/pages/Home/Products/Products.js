import React from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const row = [1, 2, 3, 4, 5, 6];
    return (
        <div className="container mt-5 py-5">
            <div className="text-center">
                <h1 className="shadowsFont">Best Selling</h1>
                <hr className="hr-style mx-auto" />
                <p className="robotoFonts">Best Seller Product This Week!</p>
                <Row xs={1} md={3} lg={3} className="g-4 my-5">
                    {
                        row.map(pd => <Product
                            key={pd}
                        ></Product>)
                    }
                </Row>

            </div>

        </div>
    );
};

export default Products;