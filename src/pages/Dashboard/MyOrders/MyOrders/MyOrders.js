import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    const [countDelete, setCountDelete] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders?search=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data));

    }, [user.email, countDelete]);

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
                        alert('Cancelled booking successfully');
                        setCountDelete(countDelete + 1);
                    }
                });
        }
    }


    return (
        <div className="transactions text-start">
            <span className="newMemberTitle ms-0 robotoFont">My Transactions
            </span>
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
    );
};

export default MyOrders;