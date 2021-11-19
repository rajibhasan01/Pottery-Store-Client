import React from 'react';
import Topbar from '../Topbar/Topbar';
import './Dashboard.css';
import DashboardHome from '../DashboardHome/DashboardHome';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders/MyOrders';
import WriteReview from '../WriteReview/WriteReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts/ManageProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders/ManageAllOrders';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import { HashLink } from 'react-router-hash-link';
import {

    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import AdminRoute from '../../../components/Shared/Login/AdminRoute/AdminRoute';


const Dashboard = () => {
    const { logout, admin } = useAuth();
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        backgroundColor: "black",
    };

    let { path, url } = useRouteMatch();

    console.log("admin => ", admin);


    return (
        <div className="dashboardContainer">
            <Topbar />
            <div className="contentBox row pt-5">
                <div className="col-md-3 col-lg-2 d-none d-md-inline">
                    <div className="sidebar mt-2">
                        <div className="sidebarWrapper">
                            <div className="sidebarMenu">
                                <h3 className="sidebarTitle">{admin ? "Admin Panel" : "Dashboard"}</h3>
                                {!admin ?
                                    <ul className="sidebarList">

                                        <NavLink to={`${url}/pay`} activeStyle={activeStyle} className="text-decoration-none text-color">
                                            <li className="sidebarListItem robotoFont">
                                                <GiIcons.GiTakeMyMoney className="sidebarIcon" />
                                                Pay
                                            </li>
                                        </NavLink>

                                        <NavLink to={`${url}/myOrders`} activeStyle={activeStyle} className="text-decoration-none text-color">
                                            <li className="sidebarListItem robotoFont">
                                                <FaIcons.FaCartPlus className="sidebarIcon robotoFont" />
                                                My Orders
                                            </li>
                                        </NavLink>

                                        <NavLink to={`${url}/review`} activeStyle={activeStyle} className="text-decoration-none text-color">
                                            <li className="sidebarListItem robotoFont">
                                                <MdIcons.MdOutlineRateReview className="sidebarIcon robotoFont" />
                                                Review
                                            </li>
                                        </NavLink>


                                    </ul>
                                    :
                                    <ul className="sidebarList">

                                        <NavLink to={`${url}/analytics`} activeStyle={activeStyle} className="text-decoration-none text-color">
                                            <li className="sidebarListItem robotoFont">
                                                <SiIcons.SiGoogleanalytics className="sidebarIcon" />
                                                Analytics
                                            </li>
                                        </NavLink>

                                        <NavLink to={`${url}/manageAllOrders`} activeStyle={activeStyle} className="text-decoration-none text-color">
                                            <li className="sidebarListItem robotoFont">
                                                <RiIcons.RiListSettingsFill className="sidebarIcon" />
                                                Manage All Orders
                                            </li>
                                        </NavLink>

                                        <NavLink to={`${url}/addProduct`} activeStyle={activeStyle} className="text-decoration-none text-color">
                                            <li className="sidebarListItem robotoFont">
                                                <AiIcons.AiFillFolderAdd className="sidebarIcon robotoFont" />
                                                Add A Product
                                            </li>
                                        </NavLink>

                                        <NavLink to={`${url}/makeAdmin`} activeStyle={activeStyle} className="text-decoration-none text-color">
                                            <li className="sidebarListItem robotoFont">
                                                <MdIcons.MdAdminPanelSettings className="sidebarIcon robotoFont" />
                                                Make Admin
                                            </li>
                                        </NavLink>

                                        <NavLink to={`${url}/manageProducts`} activeStyle={activeStyle} className="text-decoration-none text-color">
                                            <li className="sidebarListItem robotoFont">
                                                <MdIcons.MdFormatAlignRight className="sidebarIcon robotoFont" />
                                                Manage Products
                                            </li>
                                        </NavLink>

                                    </ul>
                                }
                            </div>
                            <div className="sidebarMenu">
                                <h3 className="sidebarTitle">Back to</h3>
                                <ul className="sidebarList">

                                    <HashLink to="/home#home" className="text-decoration-none text-color">
                                        <li className="sidebarListItem robotoFont">
                                            <IoIcons.IoHome className="sidebarIcon robotoFont" />
                                            Home
                                        </li>
                                    </HashLink >

                                    <HashLink to="/allproducts#allProduct" className="text-decoration-none text-color">
                                        <li className="sidebarListItem robotoFont">
                                            <MdIcons.MdClearAll className="sidebarIcon robotoFont" />
                                            Explore Products
                                        </li>
                                    </HashLink >

                                </ul>
                            </div>

                            <div className="sidebarMenu">
                                <h3 className="sidebarTitle">Sign out</h3>
                                <ul className="sidebarList">

                                    <li className="sidebarListItem robotoFont" onClick={logout}>
                                        <FaIcons.FaUserAltSlash className="sidebarIcon robotoFont" />
                                        Logout
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="col-12 col-md-9 col-lg-10">
                    <Switch>
                        <Route exact path={path}>
                            <h3>This page is underdevelopment. <br /> Sorry for the inconvenience. <br /> Please choose your route you want to go. <br /> All those route are work well. <br /> Like -<span className="text-danger">Pay, Analytics, My Order, Manage All Order </span> etc.</h3>
                        </Route>

                        <Route path={`${path}/pay`}>
                            <Pay />
                        </Route>

                        <Route path={`${path}/myOrders`}>
                            <MyOrders />
                        </Route>

                        <Route path={`${path}/review`}>
                            <WriteReview />
                        </Route>

                        <AdminRoute path={`${path}/analytics`}>
                            <DashboardHome />
                        </AdminRoute>

                        <AdminRoute path={`${path}/manageAllOrders`}>
                            <ManageAllOrders />
                        </AdminRoute>

                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProduct />
                        </AdminRoute>

                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin />
                        </AdminRoute>

                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts />
                        </AdminRoute>

                    </Switch>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;