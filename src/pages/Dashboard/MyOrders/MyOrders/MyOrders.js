import React from 'react';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {
    const rows = [1, 2, 3, 4, 5, 6];


    return (
        <div className="transactions text-start">
            <span className="newMemberTitle ms-0 robotoFont">My Transactions
            </span>
            <div className="table-responsive-sm">
                <table className="widgetLgTable">
                    <tr className="">
                        <th className="widgetLgTh robotoFont">Customer</th>
                        <th className="widgetLgTh robotoFont">Date</th>
                        <th className="widgetLgTh robotoFont">Product Details</th>
                        <th className="widgetLgTh robotoFont">Amount</th>
                        <th className="widgetLgTh robotoFont ps-1">Status</th>
                    </tr>

                    {
                        rows.map(row => <MyOrder key={row} statusType={'Pending'}></MyOrder>)
                    }

                </table>

            </div>
        </div>
    );
};

export default MyOrders;