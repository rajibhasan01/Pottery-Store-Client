import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        if (data.email !== data.confirm_email) {
            alert('email does not matched, please type again your email');
        }
        else {
            const { email } = data;
            const user = { email };

            fetch('http://localhost:5000/makeAdmin/admin', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        alert("Make admin successfull");
                        reset();
                    }
                });

        }
    };


    return (
        <div className="mt-5">
            <h3 className="text-warning text-center shadowsFont mt-5">Give Access to Others</h3>
            <p className="text-muted text-center shadowsFont">You can make others people admin to give access for maintaining your site</p>
            <div className=" row mx-auto ms-md-auto container row">
                <div className="col-12 col-md-5 col-lg-4 py-lg-5 mt-lg-5  rounded">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-design mt-lg-4">

                        <label className="mt-5 fs-5 shadowsFont">Make Admin</label>
                        <input className="form-input border-1 rounded" type="email" {...register("email", { required: true })} placeholder="New admin email" />

                        <input className="form-input border-1 rounded" type="email" {...register("confirm_email", { required: true })} placeholder="Confirm email" />


                        <input className="form-input btn bg-warning rounded" type="submit" />
                    </form>

                </div>
                <div className="col-12 col-md-7 col-lg-6">
                    <img src="https://i.ibb.co/jvS31kj/Pngtree-creative-minimalist-project-management-tripartite-4863913.png" className="w-100" alt="" />
                </div>
            </div>

        </div>
    );
};

export default MakeAdmin;