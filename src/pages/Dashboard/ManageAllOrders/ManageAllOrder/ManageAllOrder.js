import React from 'react';
import { Dropdown } from 'react-bootstrap';


const ManageAllOrder = () => {
    return (
        <tr>
            <td className="pb-2">
                <img src="https://i.ibb.co/WpDGZxh/team-img-1.jpg" alt="" className="newMemberImg" />

                <span className="newMemberUsername robotoFont">Susan keller
                </span>
            </td>
            <td className="robotoFont fw-lighter">2 Jun 2021</td>
            <td className="robotoFont fw-lighter">2 X 122</td>
            <td className="robotoFont fw-lighter">$122.00</td>
            <td className="robotoFont fw-lighter">
                <Dropdown>
                    <Dropdown.Toggle variant="light">
                        Pending
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item>Pending</Dropdown.Item>
                        <Dropdown.Item>Approved</Dropdown.Item>
                        <Dropdown.Item>Shipped</Dropdown.Item>
                        <Dropdown.Item>Recieved</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

            </td>
            <td className="robotoFont fw-lighter">
                <button className="btn bg-danger me-2 text-white">Delete</button>
                <button className="btn bg-info text-white">Check</button>
            </td>
        </tr>
    );
};

export default ManageAllOrder;