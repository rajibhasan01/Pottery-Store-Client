import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import './Pay.css';

const stripePromise = loadStripe('pk_test_51JyhHfFHKfJInTKl6lHp3PdSV3pML7OuYHWTNdcafX27xpFj8nCz7DXmW1c16VJOxkeLLbf3PyL3gpYxsIo8cPWY007odZzMse');

const Pay = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`https://immense-mountain-96317.herokuapp.com/myOrders/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
            .catch(error => console.log(error.message))
    }, [orderId]);

    return (
        <div className="payContainer pt-5">
            <h1 className="text-center">Order Details</h1>
            <h4>Product Name: <span className="text-warning">{order?.product_name}</span> </h4>
            <h4>Base Price: <span className="text-warning">{order?.product_price}</span></h4>
            <h4>Product Quantity: <span className="text-warning">{order?.quantity}</span></h4>
            <h4>Total Amount: <span className="text-warning">{order?.amount}</span></h4>
            <h4>Sub-Total: <span className="text-warning">{order?.discount_amount}</span></h4>

            <div className="container py-5">
                {
                    order?.discount_amount && <Elements stripe={stripePromise}>
                        <CheckoutForm
                            order={order}
                        />
                    </Elements>
                }
            </div>
            <Link className="text-decoration-none text-primary" to={`/dashboard/paymentSSL/${orderId}`}>Want to pay using SSLCOMMERZ?</Link>
        </div>
    );
};

export default Pay;