import React from 'react';
import Infocart from '../Infocart/Infocart';
import './FeaturedInfo.css';

const FeaturedInfo = () => {
    const rows = [1, 2, 3];
    return (
        <div className="featured">
            <div className="row g-2">
                {
                    rows.map(row => <Infocart key={row}></Infocart>)
                }
            </div>

        </div>
    );
};

export default FeaturedInfo;