import React from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import "./ManageProducts.css";

const ManageProducts = () => {
    const rows = [1, 2, 3];

    return (
        <div className="container-fluid">
            <div className="py-5 searchBox mx-auto">
                <h4 className="text-warning shadowsFont text-center mb-3">Search Here</h4>
                <div className="input-group mb-3 border rounded-pill">
                    <input type="text" className="form-control ps-4 bg-transparent robotoFontt border-0" placeholder="search by product code" aria-label="Recipient's username" aria-describedby="button-addons" />
                    <button className="btn searchBtn" type="button" id="button-addons"> <div><i className="fas fa-search"></i></div></button>
                </div>
            </div>

            {/* product list */}


            <div className="text-center">
                <span className="text-warning shadowsFont fs-3">Stock Products
                </span>
                <hr />
                <div className="table-responsive-sm mt-3">
                    <table className="widgetLgTable text-center">
                        <tr className="">
                            <th className="widgetLgTh text-center robotoFont">Product Name</th>
                            <th className="widgetLgTh text-center robotoFont">Product Code</th>
                            <th className="widgetLgTh text-center robotoFont">Stock</th>
                            <th className="widgetLgTh text-center robotoFont">Price</th>
                            <th className="widgetLgTh text-center robotoFont">Action</th>
                        </tr>

                        {
                            rows.map(row => <ManageProduct key={row} />)
                        }

                    </table>

                </div>
            </div>

        </div>
    );
};

export default ManageProducts;