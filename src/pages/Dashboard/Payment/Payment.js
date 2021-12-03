import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Payment = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState({});
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://immense-mountain-96317.herokuapp.com/myOrders/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
            .catch(error => console.log(error.message))
    }, [orderId]);

    const purchase = () => {
        const orders = {
            cus_name: user?.displayName,
            cus_email: user?.email,
            product_name: order?.product_name,
            total_amount: order?.discount_amount,
        }
        fetch(`https://immense-mountain-96317.herokuapp.com/init`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data)
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className="payContainer pt-5">
            <h1 className="text-center">SSL Order</h1>
            <h4>Product Name: <span className="text-warning">{order?.product_name}</span> </h4>
            <h4>Base Price: <span className="text-warning">{order?.product_price}</span></h4>
            <h4>Product Quantity: <span className="text-warning">{order?.quantity}</span></h4>
            <h4>Total Amount: <span className="text-warning">{order?.amount}</span></h4>
            <h4>Sub-Total: <span className="text-warning">{order?.discount_amount}</span></h4>
            <button className="btn bg-warning text-white mt-5" onClick={purchase}>Pay By SSL</button>
        </div>
    );
};

export default Payment;