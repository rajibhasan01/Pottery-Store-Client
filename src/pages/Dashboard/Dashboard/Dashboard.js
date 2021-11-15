import React from 'react';
import Topbar from '../Topbar/Topbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import DashboardHome from '../DashboardHome/DashboardHome';


const Dashboard = () => {
    return (
        <Router>
            <Topbar />
            <div className="contentBox row">
                <div className="col-md-3 col-lg-2 d-none d-md-inline">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-9 col-lg-10">
                    <Switch >

                        <Route exact path="/dashboard" component={DashboardHome} />

                        <Route path="/users" />

                        <Route path="/user/:userId" />

                    </Switch >
                </div>
            </div>
        </Router>
    );
};

export default Dashboard;