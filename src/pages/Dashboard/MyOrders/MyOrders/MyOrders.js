import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders?search=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data));

    }, [user.email]);


    return (
        <div className="transactions text-start">
            <span className="newMemberTitle ms-0 robotoFont">My Transactions
            </span>
            <div className="table-responsive-sm">
                <table className="widgetLgTable">
                    <tr className="">
                        <th className="widgetLgTh robotoFont">Customer</th>
                        <th className="widgetLgTh robotoFont">Email</th>
                        <th className="widgetLgTh robotoFont">Phone</th>
                        <th className="widgetLgTh robotoFont">Product Code</th>
                        <th className="widgetLgTh robotoFont">Product Details</th>
                        <th className="widgetLgTh robotoFont">Amount</th>
                        <th className="widgetLgTh robotoFont">Total Amount</th>
                        <th className="widgetLgTh robotoFont ps-1">Status</th>
                    </tr>

                    {
                        myOrder?.map(order => <MyOrder
                            key={order._id}
                            statusType={'Pending'}
                            order={order}
                        ></MyOrder>)
                    }

                </table>

            </div>
        </div>
    );
};

export default MyOrders;