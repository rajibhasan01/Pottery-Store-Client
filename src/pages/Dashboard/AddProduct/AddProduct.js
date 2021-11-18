import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        const sm = parseInt(data.product_price_sm);
        const lg = parseInt(data.product_price_lg);
        const xl = parseInt(data.product_price_xl);
        const product_price = { sm, lg, xl };
        const { product_code, product_details, product_discount, product_image, product_name, product_ratings, product_title, product_type } = data;
        const newData = { product_price, product_code, product_details, product_discount, product_image, product_name, product_ratings, product_title, product_type };


        fetch("http://localhost:5000/product", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Product added successfully! :) ");
                    reset();
                }
            });

    };


    return (
        <div className="mt-5">
            <h3 className="text-warning text-center shadowsFont mt-5">Add Products</h3>
            <p className="text-muted text-center shadowsFont">You can add a new products at your site by fill up the below form</p>
            <div className=" row ms-auto container  row">
                <div className="col-12 col-md-5 col-lg-4 rounded">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-design">

                        <label className="mt-5 fs-5 shadowsFont">Product Details</label>
                        <input className="form-input border-1 rounded" type="number" {...register("product_code", { required: true })} placeholder="Product code" />

                        <input className="form-input border-1 rounded" type="text" {...register("product_name", { required: true })} placeholder="Product name" />

                        <textarea className="form-input border-1 rounded" type="text" {...register("product_title", { required: true })} placeholder="Product title" />

                        <textarea className="form-input border-1 rounded" type="text" {...register("product_details", { required: true })} placeholder="Product details" />

                        <input className="form-input border-1 rounded" type="number" {...register("product_price_sm", { required: true })} placeholder="Product Price small" />

                        <input className="form-input border-1 rounded" type="number" {...register("product_price_lg", { required: true })} placeholder="Product Price large" />

                        <input className="form-input border-1 rounded" type="number" {...register("product_price_xl", { required: true })} placeholder="Product Price extra-large" />

                        <input className="form-input border-1 rounded" type="number" {...register("product_ratings", { required: true })} placeholder="Product initials ratings" />

                        <input className="form-input border-1 rounded" type="number" {...register("product_discount", { required: true })} placeholder="Product Price discount" />

                        <input className="form-input border-1 rounded" type="text" {...register("product_type", { required: true })} placeholder="Product type" />

                        <input className="form-input border-1 rounded" type="text" {...register("product_image", { required: true })} placeholder="Product image" />

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