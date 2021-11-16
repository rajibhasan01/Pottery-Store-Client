import React from 'react';
import * as MdIcons from 'react-icons/md';


const NewMember = () => {

    return (
        <li className="newMemberListItem">
            <img src="https://i.ibb.co/xMbCmH1/team-img-4.jpg" alt="" className="newMemberImg" />
            <div className="newMemberUser">
                <span className="newMemberUsername">Anna Keller</span>
                <span className="newMemberUserTitle robotoFont">Software Engineer</span>
            </div>
            <button className="newMemberButton robotoFont">
                <MdIcons.MdVisibility className="newMemberIcon" />
                Display
            </button>
        </li>
    );
};

export default NewMember;