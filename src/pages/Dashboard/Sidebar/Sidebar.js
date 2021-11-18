import React from 'react';
import { NavLink } from 'react-router-dom';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import { HashLink } from 'react-router-hash-link';


import './Sidebar.css';
import useAuth from '../../../hooks/useAuth';

const Sidebar = () => {
    const { user, logout } = useAuth();
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        backgroundColor: "black",
    }


    return (
        <div className="sidebar mt-2">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">{user.email === "admin@admin.com" ? "Admin Panel" : "Dashboard"}</h3>
                    {user.email !== "admin@admin.com" ?
                        <ul className="sidebarList">

                            <NavLink to="/dashboard/pay" activeStyle={activeStyle} className="text-decoration-none text-color">
                                <li className="sidebarListItem robotoFont">
                                    <GiIcons.GiTakeMyMoney className="sidebarIcon" />
                                    Pay
                                </li>
                            </NavLink>

                            <NavLink to="/dashboard/myorders" activeStyle={activeStyle} className="text-decoration-none text-color">
                                <li className="sidebarListItem robotoFont">
                                    <FaIcons.FaCartPlus className="sidebarIcon robotoFont" />
                                    My Orders
                                </li>
                            </NavLink>

                            <NavLink to="/dashboard/review" activeStyle={activeStyle} className="text-decoration-none text-color">
                                <li className="sidebarListItem robotoFont">
                                    <MdIcons.MdOutlineRateReview className="sidebarIcon robotoFont" />
                                    Review
                                </li>
                            </NavLink>


                        </ul>
                        :
                        <ul className="sidebarList">

                            <NavLink to="/dashboard/" activeStyle={activeStyle} className="text-decoration-none text-color">
                                <li className="sidebarListItem robotoFont">
                                    <SiIcons.SiGoogleanalytics className="sidebarIcon" />
                                    Analytics
                                </li>
                            </NavLink>

                            <NavLink to="/dashboard/manageallorders" activeStyle={activeStyle} className="text-decoration-none text-color">
                                <li className="sidebarListItem robotoFont">
                                    <RiIcons.RiListSettingsFill className="sidebarIcon" />
                                    Manage All Orders
                                </li>
                            </NavLink>

                            <NavLink to="/dashboard/addproduct" activeStyle={activeStyle} className="text-decoration-none text-color">
                                <li className="sidebarListItem robotoFont">
                                    <AiIcons.AiFillFolderAdd className="sidebarIcon robotoFont" />
                                    Add A Product
                                </li>
                            </NavLink>

                            <NavLink to="/dashboard/makeadmin" activeStyle={activeStyle} className="text-decoration-none text-color">
                                <li className="sidebarListItem robotoFont">
                                    <MdIcons.MdAdminPanelSettings className="sidebarIcon robotoFont" />
                                    Make Admin
                                </li>
                            </NavLink>

                            <NavLink to="/dashboard/manageproducts" activeStyle={activeStyle} className="text-decoration-none text-color">
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

    );
};

export default Sidebar;