import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const WriteReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // fetch(`/users/${bookID}`, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.acknowledged) {
        //             alert("Booking successfull");
        //             reset();
        //         }
        //     });

    };


    return (
        <div className="text-center">
            <h3 className="text-warning shadowsFont mt-5 ms-4 ms-md-0">Write Down Your Valuable Review Here</h3>
            <p className="text-muted shadowsFont">If you have any suggestions, please write down below. We appreciate your suggestions</p>
            <div className="mt-5 row mx-aut0 ms-md-auto container row">

                <div className="col-12 col-md-5 col-lg-4 py-5  rounded">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-design">
                        <label className="fs-5 shadowsFont">Personal information</label>
                        <input className="form-input border-1 rounded" {...register("name")} defaultValue={user.displayName} />

                        <input className="form-input border-1 rounded" {...register("email")} value={user.email} />

                        <label className="mt-5 fs-5 shadowsFont">Your review</label>
                        <input className="form-input border-1 rounded" type="number" {...register("ratings", { required: true })} placeholder="Your ratings in 5" />

                        <textarea className="form-input border-1 rounded" {...register("feedback", { required: true })} placeholder="Your feedback" />

                        <textarea className="form-input border-1 rounded" {...register("suggestions", { required: false })} placeholder="Your suggestions" />


                        <input className="form-input btn bg-warning rounded" type="submit" />
                    </form>

                </div>
                <div className="col-12 col-md-7 col-lg-6">
                    <img src="https://i.ibb.co/RDQk4CY/Pngtree-rating-on-illustration-3654340.png" className="w-100" alt="" />
                </div>
            </div>

        </div>
    );
};

export default WriteReview;