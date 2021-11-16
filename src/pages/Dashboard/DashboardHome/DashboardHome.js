import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Chart from '../Chart/Chart';
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo';
import LatestTransactions from '../LatestTransactions/LatestTransactions/LatestTransactions';
import NewMembers from '../NewMembers/NewMembers/NewMembers';
import './DashboardHome.css';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div className="m-2 ms-md-0 dashBoardHome">
            {
                user.email === 'admin@admin.com' && <>
                    <FeaturedInfo />
                    <Chart />
                    <div className="mt-2">
                        <div className="row g-2">
                            <div className="col-12 col-lg-4">
                                <NewMembers />
                            </div>
                            <div className="col-12 col-lg-8">
                                <LatestTransactions />
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default DashboardHome;