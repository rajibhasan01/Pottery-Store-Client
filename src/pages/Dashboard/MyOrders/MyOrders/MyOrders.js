import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    const [countDelete, setCountDelete] = useState(0);

    useEffect(() => {
        fetch(`https://immense-mountain-96317.herokuapp.com/myOrders?search=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data));

    }, [user.email, countDelete]);

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
                        alert('Cancel order successfully');
                        setCountDelete(countDelete + 1);
                    }
                });
        }
    }


    return (
        <div className="container-fluid">
            <div className="text-center">
                <span className="text-warning shadowsFont fs-3">My Orders
                </span>
                <hr />
                <div className="table-responsive-sm">
                    <table className="widgetLgTable">
                        <thead>
                            <tr className="">
                                <th className="widgetLgTh robotoFont">Product</th>
                                <th className="widgetLgTh robotoFont">Product Name</th>
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
                                myOrder?.map(order => <MyOrder
                                    key={order._id}
                                    statusType={'Pending'}
                                    order={order}
                                    handleDelete={handleDelete}
                                ></MyOrder>)
                            }
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
};

export default MyOrders;