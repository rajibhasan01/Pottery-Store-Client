import React from 'react';
import { Link } from 'react-router-dom';
import * as MdIcons from 'react-icons/md';

import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar mt-2">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">

                        <Link to="/users" className="text-decoration-none">
                            <li className="sidebarListItem active">
                                <MdIcons.MdLineStyle className="sidebarIcon" />
                                User
                            </li>
                        </Link>


                        <li className="sidebarListItem">
                            <MdIcons.MdTimeline className="sidebarIcon" />
                            Analytics
                        </li>


                        <li className="sidebarListItem">
                            <MdIcons.MdTrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;