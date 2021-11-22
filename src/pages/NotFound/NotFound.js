import React, { useEffect } from 'react';

const NotFound = () => {

    useEffect(() => {
        document.title = "Not Found"
    }, []);

    return (
        <div className="container py-5">
            <div className="row d-flex justify-content-around align-items-center my-5 py-5">

                <div className="col-md-6 ">
                    <div className="">
                        <h1>Error Page 404</h1>
                        <p>The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.</p>
                    </div>
                </div>


                <div className="col-md-6">
                    <img src="https://i.ibb.co/W6FqVdn/picscut-website-web-page-illustration-drawn-Mj-E3-MDc4.png" className="w-100" alt="error" />

                </div>
            </div>

        </div>
    );
};

export default NotFound;