import React from 'react';
import * as MdIcons from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyOrder = ({ order, handleDelete }) => {
    const { _id, product_image, product_name, product_discount, status, product_code, size, quantity, product_price, amount, discount_amount, product_type } = order;


    const handleClick = () => {
        alert("Sorry! your order is under processing. You can't delete it");
    }



    return (
        <tr className="text-start">
            <td className="text-start pb-2">
                <img src={product_image} alt="" className="myOderImg" />

                <span className="newMemberUsername robotoFont">{product_type}
                </span>
            </td>
            <td className="robotoFont text-start fw-lighter">{product_name}</td>
            <td className="robotoFont text-start fw-lighter">{product_code}</td>
            <td className="robotoFont text-start fw-lighter">{quantity} X {product_price} ({size})</td>
            <td className="robotoFont text-start fw-lighter">${amount}</td>
            <td className="robotoFont text-start fw-lighter">{product_discount}%</td>
            <td className="robotoFont text-start fw-lighter">${discount_amount}</td>
            <td className="robotoFont text-start fw-lighter">

                {
                    order.payment ?
                        <button className="bg-secondary px-3 border-0 py-1 rounded text-white">Paid </button>
                        :
                        <button className="bg-info px-3 border-0 py-1 rounded"> <Link className="payBtn" to={`/dashboard/payment/${_id}`}>Pay</Link> </button>
                }

            </td>
            <td className="robotoFont text-start fw-lighter"><button className={"widgetLgButton fw-lighter " + status}>{status} </button></td>
            <td className="robotoFont text-start fw-lighter">
                {
                    status === "Pending" ? <button onClick={() => handleDelete(_id)} className="btn dltBtn rounded"><MdIcons.MdDelete className="fs-4" /></button>
                        :
                        <button onClick={handleClick} className="btn dltMute rounded"><MdIcons.MdDelete className="fs-4" /></button>
                }
            </td>
        </tr>
    );
};

export default MyOrder;