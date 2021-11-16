import React from 'react';
import Chart from '../Chart/Chart';
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo';
import LatestTransactions from '../LatestTransactions/LatestTransactions/LatestTransactions';
import NewMembers from '../NewMembers/NewMembers/NewMembers';
import './DashboardHome.css';

const DashboardHome = () => {
    return (
        <div className="m-2 ms-md-0">
            <FeaturedInfo />
            <Chart />
            <div className="mt-2">
                <div className="row ">
                    <div className="col-12 col-lg-4">
                        <NewMembers />
                    </div>
                    <div className="col-12 col-lg-8">
                        <LatestTransactions />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashboardHome;