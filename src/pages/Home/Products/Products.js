import React from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import ProductsHeading from '../ProductsHeading/ProductsHeading';
import AllProductsHeading from '../ProductsHeading/AllProductsHeading';
import './Products.css';

const Products = ({ value }) => {
    const row = [1, 2, 3, 4, 5, 6];
    return (
        <div className="container mt-5 py-5">
            <div className="text-center">
                {
                    !value ? <ProductsHeading /> : <AllProductsHeading />
                }

                <Row xs={1} md={3} lg={3} className="g-4 my-5">
                    {
                        row.map(pd => <Product
                            value={value}
                            key={pd}
                        ></Product>)
                    }
                </Row>

            </div>

        </div>
    );
};

export default Products;