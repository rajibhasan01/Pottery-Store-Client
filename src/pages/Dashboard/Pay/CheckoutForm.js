import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';


const CheckoutForm = ({ order }) => {
    const { _id, name, discount_amount } = order;
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);


    useEffect(() => {
        fetch('https://immense-mountain-96317.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ discount_amount })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
            .catch(error)
    }, [discount_amount])



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        };

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
            setSuccess('')
        } else {
            setError('')
        }

        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: user.email
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message);
            setSuccess('')
        }
        else {
            setError('');
            setSuccess('Your payment Processed successfully')
            console.log(paymentIntent);
            setProcessing(false);

            // save to database
            const payment = {
                amount: paymentIntent.amount,
                transaction: paymentIntent.client_secret.slice('_secret')[0],
                created: paymentIntent.created,
                last4: paymentMethod.card.last4
            }
            const url = `https://immense-mountain-96317.herokuapp.com/Order/${_id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(error => console.log(error.message));
        }

    }
    return (
        <div className="border rounded backgroundPay text-muted p-5">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'white',
                                '::placeholder': {
                                    color: 'lightgray',
                                },
                            },
                            invalid: {
                                color: 'red',
                            },
                        },
                    }}
                />
                <div className="text-center pt-5">
                    {
                        processing ? <Spinner animation="border" variant="light" /> : <button className="btn bg-warning " type="submit" disabled={!stripe || success}>
                            Pay<span className="text-white ms-0"> ${discount_amount}</span>
                        </button>
                    }
                </div>

            </form>
            {
                error && <p className="text-dark text-center bg-white mt-3">{error}</p>
            }
            {
                success && <p className="text-dark text-center bg-success mt-3">{success}</p>
            }
        </div>
    );
};

export default CheckoutForm;