import React from 'react';
import * as MdIcons from 'react-icons/md';

const MyOrder = ({ order, handleDelete }) => {
    const { _id, status, product_code, email, size, quantity, price, amount, discount_amount, name, phone } = order;
    return (
        <tr>
            <td className="pb-2">
                <img src="https://i.ibb.co/WpDGZxh/team-img-1.jpg" alt="" className="newMemberImg" />

                <span className="newMemberUsername robotoFont">{name}
                </span>
            </td>
            <td className="robotoFont fw-lighter">{email}</td>
            <td className="robotoFont fw-lighter">{phone}</td>
            <td className="robotoFont fw-lighter">{product_code}</td>
            <td className="robotoFont fw-lighter">{quantity} X {price} ({size})</td>
            <td className="robotoFont fw-lighter">${amount}</td>
            <td className="robotoFont fw-lighter">${discount_amount}</td>
            <td className="robotoFont fw-lighter"><button className={"widgetLgButton fw-lighter " + status}>{status} </button></td>
            <td className="robotoFont fw-lighter"><button onClick={() => handleDelete(_id)} className="btn dltBtn rounded"><MdIcons.MdDelete className="fs-4" /></button></td>
        </tr>
    );
};

export default MyOrder;