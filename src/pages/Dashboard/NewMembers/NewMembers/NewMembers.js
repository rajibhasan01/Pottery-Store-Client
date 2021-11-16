import React from 'react';
import NewMember from '../NewMember/NewMember';
import './NewMembers.css';


const NewMembers = () => {
    const rows = [1, 2, 3, 4, 5];

    return (
        <div className="newMember">
            <span className="newMemberTitle robotoFont">New Join Members</span>
            <ul className="newMemberList">
                {
                    rows.map(row => <NewMember key={row}></NewMember>)
                }

            </ul>
        </div>
    );
};

export default NewMembers;