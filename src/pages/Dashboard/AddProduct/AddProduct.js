import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
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
        <div className="mt-5">
            <h3 className="text-warning text-center shadowsFont mt-5">Add Products</h3>
            <p className="text-muted text-center shadowsFont">You can add a new products at your site by fill up the below form</p>
            <div className=" row ms-auto container  row">
                <div className="col-12 col-md-5 col-lg-4 py-lg-5 mt-lg-5  rounded">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-design">

                        <label className="mt-5 fs-5 shadowsFont">Product Details</label>
                        <input className="form-input border-1 rounded" type="text" {...register("p_name", { required: true })} placeholder="Product Name" />

                        <textarea className="form-input border-1 rounded" type="text" {...register("p_details", { required: true })} placeholder="Products Details" />

                        <input className="form-input border-1 rounded" type="text" {...register("p_origin", { required: true })} placeholder="Product Origin" />

                        <input className="form-input border-1 rounded" type="text" {...register("p_image", { required: true })} placeholder="Product Image Link" />

                        <input className="form-input border-1 rounded" type="number" {...register("p_price", { required: true })} placeholder="Product Price" />

                        <input className="form-input btn bg-warning rounded" type="submit" />
                    </form>

                </div>
                <div className="col-12 col-md-7 col-lg-6 text-center">
                    <img src="https://i.ibb.co/VvLYr9k/Pin-Clipart-com-wheels-clipart-704784.png" className="w-75 pt-md-5 mt-5" alt="" />
                </div>
            </div>

        </div>
    );
};

export default AddProduct;