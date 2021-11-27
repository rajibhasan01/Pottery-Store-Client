import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useData from '../../../../hooks/useData';
import CartItem from '../CartItem/CartItem';
import './CartItems.css';

const CartItems = ({ setCheckForPlaceOrder }) => {
    const { user } = useAuth();
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [voucher, setVoucher] = useState(0);
    const [promo, setPromo] = useState(false);
    const [promoCode, setPromoCode] = useState('');
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
        setCheckForPlaceOrder(sum);
        sessionStorage.setItem(`${user.email}_CartItem`, JSON.stringify(arr));

    }, [products, items, user.email, setCheckForPlaceOrder]);

    // handle promo code
    const handlePromoCode = () => {
        setPromo(true);
    };


    // handlePromoCodeName
    const handlePromoCodeName = e => {
        const value = e.target.value
        setPromoCode(value);
    };

    // set voucher percentage
    const handlePromoCodeAction = () => {
        fetch(`https://immense-mountain-96317.herokuapp.com/promo?search=${promoCode}`)
            .then(res => res.json())
            .then(data => setVoucher(data[0].discount))
            .catch(error => {
                alert('Invalid promo code. Type FnF as promo code')
            });


    };

    // calculate total for each changes
    useEffect(() => {
        if (voucher) {
            const newTotal = totalAmount * (100 - voucher) / 100;
            setSubTotal(newTotal);
        }
    }, [totalAmount, voucher])

    // handle delete item from cart
    const handleDltItem = (id, size) => {
        const unMatchProducts = products.filter(product => product.product_id !== id || product.size !== size);
        localStorage.setItem(`${user.email}_cart`, JSON.stringify(unMatchProducts));
        setCount(count + 1);
    };

    // handle increase item
    const handlePlus = (id, size) => {
        const matchProducts = products.filter(product => product.product_id === id && product.size === size);
        const unMatchProducts = products.filter(product => product.product_id !== id || product.size !== size);
        matchProducts[0].quantity = matchProducts[0].quantity + 1;
        const newCart = [...unMatchProducts, ...matchProducts];
        localStorage.setItem(`${user.email}_cart`, JSON.stringify(newCart));
        setCount(count + 1);
    }
    // handle decrease item
    const handleMinus = (id, size) => {
        const matchProducts = products.filter(product => product.product_id === id && product.size === size);
        const unMatchProducts = products.filter(product => product.product_id !== id || product.size !== size);
        if (matchProducts[0].quantity > 1) {
            matchProducts[0].quantity = matchProducts[0].quantity - 1;
            const newCart = [...unMatchProducts, ...matchProducts];
            localStorage.setItem(`${user.email}_cart`, JSON.stringify(newCart));
            setCount(count + 1);
        }
    };

    console.log('voucher', voucher);


    return (
        <>
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
            {
                !promo ?
                    <small className="pt-3 d-block mx-auto">have a promo code! <span className="text-primary ms-0 cursor-pointer" onClick={handlePromoCode}>click here</span></small>
                    :
                    !subTotal ?
                        <div className="pt-3">
                            <input
                                type="text"
                                placeholder="promo code"
                                className="inputBox ps-2"
                                onBlur={handlePromoCodeName}
                            />

                            <button
                                className="promoBtn btn"
                                onClick={handlePromoCodeAction}
                            >Apply</button>
                        </div>
                        :
                        <div className="pt-3">
                            <h5 className="text-muted robotoFont">Sub Total:<span className="text-danger">{subTotal}/=</span></h5>
                        </div>
            }
        </>
    );
};

export default CartItems;