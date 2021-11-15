import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as GrIcons from 'react-icons/gr';
import './Dashboard.css';


const Dashboard = () => {
    return (
        <div className="topbar  px-md-4 mt-1">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo d-none d-md-block">DashBoard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <GrIcons.GrNotification className="fs-5 me-1" />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <GrIcons.GrLanguage className="fs-5 me-1" />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <MdIcons.MdOutlineSettings className="fs-4 me-1" />
                    </div>
                    <img src="https://i.ibb.co/fSS2CBd/team-img-6.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;