import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    return (
        <div className="">
            <section className="home_blog border-0" id="home">

                <div className="content p-5 barBoxDesign d-flex">
                    <div>
                        <h3 className="barDesign robotoFont fw-normal">|</h3>
                    </div>
                    <div>
                        <h2 className="text-white robotoFont fw-normal">The Premiere Organization for Ceramic Artists</h2>
                        <h6 className="text-white robotoFont fw-light">The International Ceramic Artists Network (ICAN) gives you everything you need to become the best ceramic artist you can be!</h6>
                        <button className="btn rounded border-0 px-5 mt-3 btn-design">Learn About ICAN</button>
                    </div>
                </div>

            </section>

            <Blog />

        </div>
    );
};

export default Blogs;