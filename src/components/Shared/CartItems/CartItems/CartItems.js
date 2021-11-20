import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import CartItem from '../CartItem/CartItem';

const CartItems = () => {
    const { user } = useAuth();
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem(`${user.email}_cart`));
        setProducts(items);

    }, [count, user.email])

    const handleDltItem = (id, size) => {
        console.log(id, size);
        const unMatchProducts = products.filter(product => product.product_id != id || product.size != size);
        localStorage.setItem(`${user.email}_cart`, JSON.stringify(unMatchProducts));
        setCount(count + 1);
    }
    return (
        <div>
            <h4 className="robotoFont fw-light text-muted pt-3">Total Products = {products?.length}</h4>
            <hr />
            <div className="table-responsive-sm">
                <table className="widgetLgTable">
                    <thead>
                        <tr className="">
                            <th className="widgetLgTh robotoFont">Product</th>
                            <th className="widgetLgTh robotoFont">Details</th>
                            <th className="widgetLgTh robotoFont">Discount</th>
                            <th className="widgetLgTh robotoFont">Amount</th>
                            <th className="widgetLgTh robotoFont ps-1">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map((product, key) => <CartItem
                                key={key}
                                product={product}
                                handleDltItem={handleDltItem}
                            />)
                        }
                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default CartItems;