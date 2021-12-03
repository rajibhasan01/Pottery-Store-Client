import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [search, setSearch] = useState('');
    const [countDelete, setCountDelete] = useState(0);

    useEffect(() => {
        fetch(`https://immense-mountain-96317.herokuapp.com/allOrders`)
            .then(res => res.json())
            .then(data => setAllOrders(data));

    }, [countDelete]);


    const handleSearchInput = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (value === '') {
            setCountDelete(countDelete + 1);
        }

    };

    const handleSearchBtn = () => {

        if (search === '') {
            setCountDelete(countDelete + 1);
        }

        else {
            fetch(`https://immense-mountain-96317.herokuapp.com/myOrders?search=${search}`)
                .then(res => res.json())
                .then(data => setAllOrders(data))

        }
    };


    const handleDelete = (id) => {
        const url = `https://immense-mountain-96317.herokuapp.com/myOrders/${id}`
        const procced = window.confirm('Are you sure to cancell this order');
        if (procced) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Cancelled Order successfully');
                        setCountDelete(countDelete + 1);
                    }
                });
        }
    };

    const handleUpdateStatus = (id, value) => {
        const status = [value];

        fetch(`https://immense-mountain-96317.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Request Approved');
                    setCountDelete(countDelete + 1);
                }
            });
    }



    return (
        <div className="container-fluid">
            <div className="text-center">
                <span className="text-warning shadowsFont fs-3">Manage All Orders
                </span>
                <div className="mt-2 ms-auto me-md-4 pe-md-3 searchBox">
                    <div className="input-group mb-3 rounded border">
                        <input type="text" onChange={handleSearchInput} className="form-control ps-3 bg-transparent robotoFontt border-0" placeholder="search by customer email" aria-label="Recipient's username" aria-describedby="button-addons" />
                        <button className="btn searchBtn" onClick={handleSearchBtn} type="button" id="button-addons"> <div><i className="fas fa-search"></i></div></button>
                    </div>
                </div>
                <hr />
                <div className="mt-3">
                    <Table responsive borderless className="widgetLgTable text-center">
                        <thead>
                            <tr className="">
                                <th className="widgetLgTh robotoFont">Customer</th>
                                <th className="widgetLgTh robotoFont">Email</th>
                                <th className="widgetLgTh robotoFont">Phone</th>
                                <th className="widgetLgTh robotoFont">Product Code</th>
                                <th className="widgetLgTh robotoFont">Product Details</th>
                                <th className="widgetLgTh robotoFont">Amount</th>
                                <th className="widgetLgTh robotoFont">Discount</th>
                                <th className="widgetLgTh robotoFont">Total Amount</th>
                                <th className="widgetLgTh robotoFont">Payment</th>
                                <th className="widgetLgTh robotoFont ps-1">Status</th>
                                <th className="widgetLgTh robotoFont ps-1">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allOrders?.map(order => <ManageAllOrder
                                    key={order._id}
                                    order={order}
                                    handleDelete={handleDelete}
                                    handleUpdateStatus={handleUpdateStatus}
                                />)
                            }
                        </tbody>

                    </Table>

                </div>
            </div>

        </div>
    );
};

export default ManageAllOrders;