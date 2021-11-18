import React, { useEffect, useState } from 'react';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [countDelete, setCountDelete] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/allOrders`)
            .then(res => res.json())
            .then(data => setAllOrders(data));

    }, [countDelete]);

    const handleDelete = (id) => {
        const url = `http://localhost:5000/myOrders/${id}`
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

        fetch(`http://localhost:5000/orders/${id}`, {
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
                <hr />
                <div className="table-responsive-sm mt-3">
                    <table className="widgetLgTable text-center">
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

                    </table>

                </div>
            </div>

        </div>
    );
};

export default ManageAllOrders;