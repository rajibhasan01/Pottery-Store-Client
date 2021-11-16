import React from 'react';
import LatestTransaction from '../LatestTransaction/LatestTransaction';
import './LatestTransactions.css';

const LatestTransactions = () => {
    const rows = [1, 2, 3, 4, 5, 6];


    return (
        <div className="latestTransactions">
            <span className="newMemberTitle ms-0 robotoFont">Latest Transactions
            </span>
            <div className="table-responsive-sm">
                <table className="widgetLgTable">
                    <tr className="">
                        <th className="widgetLgTh robotoFont">Customer</th>
                        <th className="widgetLgTh robotoFont">Date</th>
                        <th className="widgetLgTh robotoFont">Amount</th>
                        <th className="widgetLgTh robotoFont ps-2">Status</th>
                    </tr>

                    {
                        rows.map(row => <LatestTransaction key={row} statusType={'Pending'}></LatestTransaction>)
                    }

                </table>

            </div>
        </div>
    );
};

export default LatestTransactions;