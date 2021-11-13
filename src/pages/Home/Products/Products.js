import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import ProductsHeading from '../ProductsHeading/ProductsHeading';
import AllProductsHeading from '../ProductsHeading/AllProductsHeading';
import './Products.css';

const Products = ({ value }) => {
    const [btnactv, setBtnActv] = useState({ btn1: true, btn2: false, btn3: false });

    const handleBtn = (event) => {
        const field = event.target.name;
        console.log(field);
        btnactv.btn1 = false;
        btnactv.btn2 = false;
        btnactv.btn3 = false;
        const newBtn = { ...btnactv };
        newBtn[field] = true;
        setBtnActv(newBtn);


    }

    let row = [1, 2, 3, 4, 5, 6, 8, 9, 10];
    if (!value) {
        row = row.slice(0, 6);
    }
    return (
        <div className="container mt-5 py-5">

            {
                value ? <div className="text-center">

                    <AllProductsHeading />
                    <div className="text-start buttonBox ps-md-5">

                        <button
                            className={btnactv.btn1 ? "btn productsBoxBtn px-3 btnActive" : "btn productsBoxBtn px-3"}
                            name="btn1"
                            onClick={handleBtn}
                        >All</button>

                        <button
                            className={btnactv.btn2 ? "btn productsBoxBtn btnActive" : "btn productsBoxBtn"}
                            name="btn2"
                            onClick={handleBtn}
                        >Discount</button>

                        <button
                            className={btnactv.btn3 ? "btn productsBoxBtn btnActive" : "btn productsBoxBtn"}
                            name="btn3"
                            onClick={handleBtn}
                        >Top Rated</button>

                    </div>
                    <div className="border px-3 pt-4">

                        <Row xs={1} md={3} lg={4} className="g-4">
                            {
                                row.map(pd => <Product
                                    value={value}
                                    key={pd}
                                ></Product>)
                            }
                        </Row>
                    </div>
                </div>

                    :
                    <div className="text-center">
                        <ProductsHeading />
                        <Row xs={1} md={3} lg={3} className="g-4 my-5">
                            {
                                row.map(pd => <Product
                                    value={value}
                                    key={pd}
                                ></Product>)
                            }
                        </Row>
                    </div>
            }

        </div>
    );
};

export default Products;