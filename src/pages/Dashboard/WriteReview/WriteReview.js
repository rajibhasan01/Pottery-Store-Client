import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const WriteReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const email = user.email;
        const img = user.photoURL || "https://i.ibb.co/hcnzVg7/21104.png";
        const user_name = user.displayName;
        const newData = { ...data, email, img, user_name };

        console.log(newData);
        fetch("http://localhost:5000/review", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Thanks for your feedback :)");
                    reset();
                }
            });

    };


    return (
        <div className="text-center">
            <h3 className="text-warning shadowsFont mt-5 ms-4 ms-md-0">Write Down Your Valuable Review Here</h3>
            <p className="text-muted shadowsFont">If you have any suggestions, please write down below. We appreciate your suggestions</p>
            <div className="mt-5 row mx-aut0 ms-md-auto container row">

                <div className="col-12 col-md-5 col-lg-4 py-5  rounded">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-design">

                        <label className="mt-5 fs-5 shadowsFont">Your review</label>
                        <input className="form-input border-1 rounded" type="number" {...register("ratings", { required: true })} placeholder="Your ratings in 5" />

                        <textarea className="form-input border-1 rounded" {...register("comment", { required: true })} placeholder="Your feedback" />

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