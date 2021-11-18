import React from 'react';

const MyOrder = ({ order }) => {
    const { status, size, quantity, price, amount, discount_amount, name, phone } = order;
    return (
        <tr>
            <td className="pb-2">
                <img src="https://i.ibb.co/WpDGZxh/team-img-1.jpg" alt="" className="newMemberImg" />

                <span className="newMemberUsername robotoFont">{name}
                </span>
            </td>
            <td className="robotoFont fw-lighter">{phone}</td>
            <td className="robotoFont fw-lighter">{quantity} X {price} ({size})</td>
            <td className="robotoFont fw-lighter">${amount}</td>
            <td className="robotoFont fw-lighter">${discount_amount}</td>
            <td className="robotoFont fw-lighter"><button className={"widgetLgButton fw-lighter " + status}>{status} </button></td>
        </tr>
    );
};

export default MyOrder;