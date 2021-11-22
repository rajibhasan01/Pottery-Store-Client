import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useData from '../../../../hooks/useData';
import CartItem from '../CartItem/CartItem';

const CartItems = () => {
    const { user } = useAuth();
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [totalAmount, setTotalAmount] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const [items] = useData();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem(`${user.email}_cart`));
        setProducts(items);

    }, [count, user.email]);

    // calculated total amount
    useEffect(() => {
        const arr = [];
        let sum = 0;
        let value = {};
        if (products) {
            for (const product of products) {
                for (const item of items) {
                    if (product.product_id === item._id) {
                        sum = sum + (item.product_price[product.size] * product.quantity * (100 - item.product_discount) / 100);
                        let amount = item.product_price[product.size] * product.quantity;
                        let discount_amount = (amount * (100 - item.product_discount) / 100);

                        value = {
                            ...product, product_image: item.product_image, product_code: item.product_code, product_discount: item.product_discount, product_name: item.product_name, product_price: item.product_price[product.size], status: "Pending", discount_amount, amount, product_type: item.product_type
                        };
                        arr.push(value);
                    }
                }
            };
        }
        setTotalAmount(sum);
        setOrderList(arr);
        sessionStorage.setItem(`${user.email}_CartItem`, JSON.stringify(arr));

    }, [products, items, user.email]);





    // handle delete item from cart
    const handleDltItem = (id, size) => {
        console.log(id, size);
        const unMatchProducts = products.filter(product => product.product_id != id || product.size != size);
        localStorage.setItem(`${user.email}_cart`, JSON.stringify(unMatchProducts));
        setCount(count + 1);
    };

    // handle increase item
    const handlePlus = (id, size) => {
        const matchProducts = products.filter(product => product.product_id == id && product.size == size);
        const unMatchProducts = products.filter(product => product.product_id != id || product.size != size);
        matchProducts[0].quantity = matchProducts[0].quantity + 1;
        const newCart = [...unMatchProducts, ...matchProducts];
        localStorage.setItem(`${user.email}_cart`, JSON.stringify(newCart));
        setCount(count + 1);
    }
    // handle decrease item
    const handleMinus = (id, size) => {
        const matchProducts = products.filter(product => product.product_id == id && product.size == size);
        const unMatchProducts = products.filter(product => product.product_id != id || product.size != size);
        if (matchProducts[0].quantity > 1) {
            matchProducts[0].quantity = matchProducts[0].quantity - 1;
            const newCart = [...unMatchProducts, ...matchProducts];
            localStorage.setItem(`${user.email}_cart`, JSON.stringify(newCart));
            setCount(count + 1);
        }
    };


    return (
        <div className="bg-light p-2">
            <h4 className="robotoFont fw-light text-muted pt-3">Total Products = {products?.length}</h4>
            <hr />
            <div className="table-responsive-sm">
                <table className="widgetLgTable mx-auto">
                    <thead>
                        <tr className="">
                            <th className="widgetLgTh robotoFont ps-md-5">Product</th>
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
                                handlePlus={handlePlus}
                                handleMinus={handleMinus}
                            />)
                        }

                        <tr className="border-bottom"><td className="displayHidden"> .</td></tr>

                        <tr className="text-start robotoFont fs-6 ">
                            <td></td>
                            <td></td>
                            <td className="text-start robotoFont fs-6 ">Total =</td>
                            <td className="text-start robotoFont text-danger">${totalAmount}</td>

                        </tr>
                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default CartItems;