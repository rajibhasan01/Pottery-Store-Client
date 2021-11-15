import React from 'react';
import * as MdIcons from 'react-icons/md';


const Infocart = () => {
    return (
        <div className="col-12 col-md-4">
            <div className="featuredItem">
                <span className="fs-5 robotoFont text-muted pb-2 d-block">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="fs-4 fontMoney robotoFont">$2,415</span>
                    <span className="fontSizeValue">
                        -11.4
                        <MdIcons.MdArrowDownward className="text-danger fs-6" />
                    </span>
                </div>
                <span className="spanFontSize">Compared to last month</span>
            </div>
        </div>
    );
};

export default Infocart;