import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const cart = JSON.parse(sessionStorage.getItem('cart'));

    const onSubmit = data => {
        const img = user.photoURL || "https://i.ibb.co/KwXM8M3/16196015-10154888128487744-6901111466535510271-n.png";
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
            <Navbar />
            <div className="py-5">
                <div className="mt-5 row mx-aut0 ms-md-auto container">
                    <h3 className="ms-md-5 text-warning shadowsFont mt-5">Purchase Your Product NOW</h3>
                    <div className="col-12 col-md-5 col-lg-4 py-5  rounded">
                        <form onSubmit={handleSubmit(onSubmit)} className="form-design">
                            <label className="fs-5 shadowsFont">Personal information</label>
                            <input className="form-input border-1 rounded" {...register("name")} defaultValue={user.displayName} />

                            <input className="form-input border-1 rounded" {...register("email")} value={user.email} />

                            <label className="mt-5 fs-5 shadowsFont">Contact information</label>
                            <input className="form-input border-1 rounded" {...register("address", { required: true })} placeholder="address" />

                            <input className="form-input border-1 rounded" {...register("city", { required: true })} placeholder="city" />

                            <input className="form-input border-1 rounded" type="number" {...register("phone", { required: true })} placeholder="Phone Number" />

                            <input className="form-input btn bg-warning rounded" type="submit" />
                        </form>

                    </div>
                    <div className="col-12 col-md-7 col-lg-6">
                        <img src="https://i.ibb.co/dcVh8cW/Pngtree-gray-shopping-trolley-logo-4459394.png" className="w-75" alt="" />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default PlaceOrder;