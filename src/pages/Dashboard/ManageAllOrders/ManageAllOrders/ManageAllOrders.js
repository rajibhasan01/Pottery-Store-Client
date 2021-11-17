import React from 'react';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const rows = [1, 2, 3, 4, 5, 6];

    return (
        <div className="container-fluid">
            <div className="text-center">
                <span className="text-warning shadowsFont fs-3">Manage All Orders
                </span>
                <hr />
                <div className="table-responsive-sm mt-3">
                    <table className="widgetLgTable text-center">
                        <tr className="">
                            <th className="widgetLgTh text-center robotoFont">Customer Details</th>
                            <th className="widgetLgTh text-center robotoFont">Product Code</th>
                            <th className="widgetLgTh text-center robotoFont">Quantity</th>
                            <th className="widgetLgTh text-center robotoFont">Amount</th>
                            <th className="widgetLgTh text-center robotoFont">Status</th>
                            <th className="widgetLgTh text-center robotoFont">Action</th>
                        </tr>

                        {
                            rows.map(row => <ManageAllOrder key={row} />)
                        }

                    </table>

                </div>
            </div>

        </div>
    );
};

export default ManageAllOrders;