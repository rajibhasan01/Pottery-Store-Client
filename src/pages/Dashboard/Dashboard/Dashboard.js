import React from 'react';
import Topbar from '../Topbar/Topbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import DashboardHome from '../DashboardHome/DashboardHome';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders/MyOrders';
import WriteReview from '../WriteReview/WriteReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';


const Dashboard = () => {
    return (
        <div className="dashboardContainer">
            <Router>
                <Topbar />
                <div className="contentBox row pt-5">
                    <div className="col-md-3 col-lg-2 d-none d-md-inline">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-9 col-lg-10">
                        <Switch >

                            <Route exact path="/dashboard" component={DashboardHome} />

                            <Route exact path="/dashboard/pay" component={Pay} />

                            <Route exact path="/dashboard/myorders" component={MyOrders} />

                            <Route exact path="/dashboard/review" component={WriteReview} />

                            <Route exact path="/dashboard/makeadmin" component={MakeAdmin} />

                            <Route exact path="/dashboard/addproduct" component={AddProduct} />

                        </Switch >
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Dashboard;