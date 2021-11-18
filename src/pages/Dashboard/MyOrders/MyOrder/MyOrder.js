import React from 'react';
import * as MdIcons from 'react-icons/md';
import useData from '../../../../hooks/useData';

const MyOrder = ({ order, handleDelete }) => {
    const { _id, status, product_code, size, quantity, price, amount, discount_amount } = order;

    const [items] = useData();

    const matchedItem = items.find(item => item?.product_code === product_code);
    console.log(matchedItem);



    return (
        <tr>
            <td className="pb-2">
                <img src={matchedItem?.product_image} alt="" className="myOderImg" />

                <span className="newMemberUsername robotoFont">{matchedItem?.product_type}
                </span>
            </td>
            <td className="robotoFont fw-lighter">{matchedItem?.product_name}</td>
            <td className="robotoFont fw-lighter">{product_code}</td>
            <td className="robotoFont fw-lighter">{quantity} X {price} ({size})</td>
            <td className="robotoFont fw-lighter">${amount}</td>
            <td className="robotoFont fw-lighter">{matchedItem?.product_discount}%</td>
            <td className="robotoFont fw-lighter">${discount_amount}</td>
            <td className="robotoFont fw-lighter"><button className={"widgetLgButton fw-lighter " + status}>{status} </button></td>
            <td className="robotoFont fw-lighter"><button onClick={() => handleDelete(_id)} className="btn dltBtn rounded"><MdIcons.MdDelete className="fs-4" /></button></td>
        </tr>
    );
};

export default MyOrder;