import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const cart = JSON.parse(sessionStorage.getItem(`${user.email}_cart`));
    const img = user.photoURL || "https://i.ibb.co/KwXM8M3/16196015-10154888128487744-6901111466535510271-n.png";

    const onSubmit = data => {

        const orderInfo = { ...cart, ...data, img };
        console.log(orderInfo);

        fetch("https://immense-mountain-96317.herokuapp.com/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Booking successfull");
                    reset();
                }
            });


    };

    return (
        <div>
            <div className="mx-aut0 ms-md-auto bg-light py-5 container">

                <h3 className="text-dark shadowsFont">Purchase Your Product NOW</h3>

                <div className="rounded">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-design">
                        <label className="fs-5 shadowsFont d-none">Personal information</label>
                        <input className="form-input border-1 rounded d-none" {...register("name")} defaultValue={user.displayName} />

                        <input className="form-input border-1 rounded d-none" {...register("email")} value={user.email} />

                        <label className="mt-5 fs-5 shadowsFont">Contact information</label>
                        <input className="form-input border-1 rounded" {...register("address", { required: true })} placeholder="Address" />

                        <input className="form-input border-1 rounded" {...register("city", { required: true })} placeholder="City" />

                        <input className="form-input border-1 rounded" type="number" {...register("phone", { required: true })} placeholder="Phone Number" />

                        <textarea className="form-input border-1 rounded" type="text" {...register("message", { required: false })} placeholder="Message if any!" />

                        <input className="form-input btn bg-warning rounded" type="submit" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;