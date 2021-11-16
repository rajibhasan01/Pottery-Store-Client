import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';

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
                                <li className="sidebarListItem">
                                    <FaIcons.FaCartPlus className="sidebarIcon robotoFont" />
                                    My Orders
                                </li>
                            </NavLink>

                            <NavLink to="/dashboard/review" activeStyle={activeStyle} className="text-decoration-none text-color">
                                <li className="sidebarListItem">
                                    <MdIcons.MdOutlineRateReview className="sidebarIcon robotoFont" />
                                    Review
                                </li>
                            </NavLink>


                        </ul>
                        :
                        <ul className="sidebarList">

                            <Link to="/users" className="text-decoration-none text-black">
                                <li className="sidebarListItem robotoFont active">
                                    <RiIcons.RiListSettingsFill className="sidebarIcon" />
                                    Manage All Orders
                                </li>
                            </Link>

                            <Link to="/users" className="text-decoration-none text-black active">
                                <li className="sidebarListItem">
                                    <AiIcons.AiFillFolderAdd className="sidebarIcon robotoFont" />
                                    Add A Product
                                </li>
                            </Link>

                            <Link to="/users" className="text-decoration-none text-black">
                                <li className="sidebarListItem">
                                    <MdIcons.MdAdminPanelSettings className="sidebarIcon robotoFont" />
                                    Make Admin
                                </li>
                            </Link>

                            <Link to="/users" className="text-decoration-none text-black">
                                <li className="sidebarListItem">
                                    <MdIcons.MdFormatAlignRight className="sidebarIcon robotoFont" />
                                    Manage Products
                                </li>
                            </Link>


                        </ul>
                    }
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Sign out</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem " onClick={logout}>
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