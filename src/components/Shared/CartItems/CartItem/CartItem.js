import React from 'react';
import useData from '../../../../hooks/useData';
import * as MdIcons from 'react-icons/md';
import "./CartItem.css";


const CartItem = ({ product, handleMinus, handlePlus, handleDltItem }) => {
    const [items] = useData();
    const { product_id, size, quantity } = product;

    const matchedItem = items?.find(item => item._id === product.product_id);

    // const { product_image, product_name, product_price, product_discount } = matchedItem;

    const discount_amount = ((quantity * matchedItem?.product_price[size])) - ((quantity * matchedItem?.product_price[size]) * matchedItem?.product_discount * 0.01);

    if (!items || !matchedItem || !product) {
        return (
            <tr>
                <td>
                    <img src="https://i.ibb.co/bJJx03Y/Fountain.gif" alt="" className="d-flex justify-content-center align-items-center" />
                </td>
            </tr>
        )
    }

    return (
        <tr className="text-start">
            <td className="pb-2 ps-md-5">
                <img src={matchedItem?.product_image} alt="" className="myOderImg" />

                <span className="newMemberUsername robotoFont">{matchedItem?.product_name}
                </span>
            </td>
            <td className="robotoFont fw-lighter">{quantity} X {matchedItem?.product_price[size]} ({size})</td>
            <td className="robotoFont fw-lighter">{matchedItem?.product_discount}%</td>
            <td className="robotoFont fw-lighter">${discount_amount}</td>

            <td className="robotoFont fw-lighter">
                <div className="d-flex">
                    <button
                        className="btn px-2 btnFocus"
                        name='minus'
                        onClick={() => handleMinus(product_id, size)}

                    >-</button>
                    <button
                        className="btn px-2 btnFocus"
                        name='plus'
                        onClick={() => handlePlus(product_id, size)}

                    >+</button>

                    <button
                        className="btn rounded btnFocus"
                        onClick={() => handleDltItem(product_id, size)}>
                        <MdIcons.MdClose className="fs-4" />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default CartItem;