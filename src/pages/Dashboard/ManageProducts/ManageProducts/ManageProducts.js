import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import "./ManageProducts.css";

const ManageProducts = () => {
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
        <div className="container-fluid">
            <div className="py-5 searchBox mx-auto">
                <h4 className="text-warning shadowsFont text-center mb-3">Search Here</h4>
                <div className="input-group mb-3 border rounded-pill">
                    <input type="text" className="form-control ps-4 bg-transparent robotoFontt border-0" placeholder="search by product code" aria-label="Recipient's username" aria-describedby="button-addons" />
                    <button className="btn searchBtn" type="button" id="button-addons"> <div><i className="fas fa-search"></i></div></button>
                </div>

            </div>

        </div>
    );
};

export default ManageProducts;