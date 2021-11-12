import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="container">
            <div className="row g-0 mt-5">
                <div className="col-6 imgContainer">
                    <img src="https://i.ibb.co/BCT51LM/andy-kelly-P21t-YLUo-PI-unsplash.jpg" alt="" className="blogImage pe-2" />

                    <div className="middle">
                        <p>Pottery is the ceramic material which makes up potteryware. </p>
                        <button className="btn blogButton">Details</button>
                    </div>

                </div>
                <div className="col-6">
                    <div className="row g-0">
                        <div className="col-6 imgContainer">
                            <img src="https://i.ibb.co/1KszhWb/clsoe-up-hands-doing-pottery.jpg" alt="" className="blogImage ps-2 pb-2" />
                            <div className="middle">
                                <p>Pottery is the ceramic material. </p>
                                <button className="btn blogButton">Details</button>
                            </div>

                        </div>
                        <div className="col-6 imgContainer">
                            <img src="https://i.ibb.co/xJxLCxq/earl-wilcox-7-ZK-Cu-Hroq4-unsplash.jpg" alt="" className="blogImage ps-3 pb-2" />
                            <div className="middle">
                                <p>Pottery is the ceramic material. </p>
                                <button className="btn blogButton">Details</button>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 imgContainer">
                            <img src="https://i.ibb.co/R96qZYp/tom-crew-8-ldgq801c-E-unsplash.jpg" alt="" className="blogImage ps-2 pt-2" />
                            <div className="middle">
                                <p>Pottery is the ceramic material which makes up potteryware. </p>
                                <button className="btn blogButton">Details</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Blog;