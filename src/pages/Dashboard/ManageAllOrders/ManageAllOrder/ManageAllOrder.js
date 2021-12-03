import React from 'react';
import { Dropdown } from 'react-bootstrap';
import * as MdIcons from 'react-icons/md';
import './ManageAllOrder.css';


const ManageAllOrder = ({ order, handleDelete, handleUpdateStatus }) => {
    const { _id, size, product_price, product_discount, discount_amount, amount, quantity, status, product_code, name, email, phone, img } = order;
    return (
        <tr>
            <td className="pb-2 text-start">
                <img src={img} alt="" className="newMemberImg" />

                <span className="newMemberUsername robotoFont">{name}
                </span>
            </td>
            <td className="robotoFont fw-lighter text-start">{email}</td>
            <td className="robotoFont fw-lighter text-start">{phone}</td>
            <td className="robotoFont fw-lighter text-start">{product_code}</td>
            <td className="robotoFont fw-lighter text-start">{quantity} X {product_price} ({size})</td>
            <td className="robotoFont fw-lighter text-start">{amount}</td>
            <td className="robotoFont fw-lighter text-start">{product_discount}%</td>
            <td className="robotoFont fw-lighter text-start">{discount_amount}</td>
            <td className="robotoFont fw-lighter text-start">
                {
                    order?.payment ?
                        <button className="btn bg-success text-white btnWidth">Paid</button>
                        :
                        <button className="btn bg-danger text-white btnWidth">Due</button>}

            </td>
            <td className="robotoFont fw-lighter text-start">
                <Dropdown>
                    <Dropdown.Toggle className={status + " dropWidth"}>
                        {status}
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item onClick={() => handleUpdateStatus(_id, "Pending")}>Pending</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleUpdateStatus(_id, "Approved")}>Approved</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleUpdateStatus(_id, "Shipped")}>Shipped</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleUpdateStatus(_id, "Recieved")}>Recieved</Dropdown.Item>

                        <Dropdown.Item onClick={() => handleUpdateStatus(_id, "Rejected")}>Rejected</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

            </td>
            <td className="robotoFont fw-lighter text-start ">
                <div>
                    <button className="btn dltBtn rounded" onClick={() => handleDelete(_id)}><MdIcons.MdDelete className="fs-5" /></button>
                    <button className="btn checkBtn ms-2 d-none d-lg-inline rounded"><MdIcons.MdRemoveRedEye className="fs-5" /></button>
                </div>

            </td>
            <td>
                <button className="btn checkBtn d-lg-none rounded"><MdIcons.MdRemoveRedEye className="fs-5" /></button>
            </td>
        </tr>
    );
};

export default ManageAllOrder;