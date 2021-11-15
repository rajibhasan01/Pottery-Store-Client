import React from 'react';
import Chart from '../Chart/Chart';
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo';
import './DashboardHome.css';

const DashboardHome = () => {
    return (
        <div className="m-2 ms-md-0">
            <FeaturedInfo />
            <Chart />

        </div>
    );
};

export default DashboardHome;