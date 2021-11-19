import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import "./ManageProducts.css";

const ManageProducts = () => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://immense-mountain-96317.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            });

    }, [count]);

    const handleSearchInput = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (value === '') {
            setCount(count + 1);
        }

    };


    const handleSearchBtn = () => {

        if (search === '') {
            setCount(count + 1);
        }

        else {
            fetch(`https://immense-mountain-96317.herokuapp.com/product?search=${search}`)
                .then(res => res.json())
                .then(data => setItems(data))

        }
    };


    const handleDelete = id => {
        const url = `https://immense-mountain-96317.herokuapp.com/deleteproduct/${id}`
        const procced = window.confirm('Are you sure to cancell this order');
        if (procced) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Delete Product Successfully');
                        setCount(count + 1);
                    }
                });
        }
    };


    return (
        <div className="container-fluid">
            <div className="py-5 searchBox mx-auto">
                <h4 className="text-warning shadowsFont text-center mb-3">Search Here</h4>
                <div className="input-group mb-3 border rounded-pill">
                    <input type="text" onChange={handleSearchInput} className="form-control ps-4 bg-transparent robotoFontt border-0" placeholder="search by product code" aria-label="Recipient's username" aria-describedby="button-addons" />
                    <button className="btn searchBtn" onClick={handleSearchBtn} type="button" id="button-addons"> <div><i className="fas fa-search"></i></div></button>
                </div>
            </div>

            {/* product list */}


            <div className="text-center">
                <span className="text-warning shadowsFont fs-3">Stock Products
                </span>
                <hr />
                <div className="table-responsive-sm mt-3">
                    <table className="widgetLgTable text-center">
                        <thead>
                            <tr className=" text-start">
                                <th className="widgetLgTh robotoFont text-start">Product Name</th>
                                <th className="widgetLgTh robotoFont text-start">Product Code</th>
                                <th className="widgetLgTh robotoFont text-start">Discount</th>
                                <th className="widgetLgTh robotoFont text-start">Price</th>
                                <th className="widgetLgTh robotoFont text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                items?.map(item => <ManageProduct
                                    key={item._id}
                                    item={item}
                                    handleDelete={handleDelete}
                                />)
                            }
                        </tbody>

                    </table>

                </div>
            </div>

        </div>
    );
};

export default ManageProducts;