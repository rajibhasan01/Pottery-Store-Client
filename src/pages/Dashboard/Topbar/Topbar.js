import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as GrIcons from 'react-icons/gr';
import './Topbar.css';
import useAuth from '../../../hooks/useAuth';

const Topbar = () => {
    const { user, admin } = useAuth();
    const profile_pic = user.photoURL || "https://i.ibb.co/hcnzVg7/21104.png";
    return (
        <div className="topbar  pe-md-4">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo d-none d-md-block">{admin ? "Admin Panel" : "Dashboard"}</span>
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
                    <img src={profile_pic} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;