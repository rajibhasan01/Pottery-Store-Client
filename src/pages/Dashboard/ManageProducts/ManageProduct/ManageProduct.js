import React from 'react';
import * as MdIcons from 'react-icons/md';

const ManageProduct = ({ item }) => {
    const { product_name, product_price, product_code, product_discount, product_image } = item;

    return (
        <tr>
            <td className="pb-2 text-start">
                <img src={product_image} alt="" className="productImageManage" />

                <span className="newMemberUsername robotoFont">{product_name}
                </span>
            </td>
            <td className="robotoFont fw-lighter text-start">{product_code}</td>
            <td className="robotoFont fw-lighter text-start">{product_discount}%</td>
            <td className="robotoFont fw-lighter text-start">{product_price.sm}(Sm) - {product_price.lg}(Lg) - {product_price.xl}(Xl)</td>
            <td className="robotoFont fw-lighter d-none d-md-inline text-start">
                <button className="btn bg-danger me-2 text-white text-start">Delete</button>
                <button className="btn bg-warning text-white text-start">Update</button>
            </td>
            <td className="robotoFont d-sm-inline d-md-none text-start">
                <MdIcons.MdDelete className="fs-4 text-danger text-start" />
                <MdIcons.MdChangeCircle className="fs-4 text-warning text-start" />
            </td>
        </tr>
    );
};

export default ManageProduct;