import React from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import * as GiIcons from 'react-icons/gi';
import PlaceOrder from '../../../pages/PlaceOrder/PlaceOrder';
import Success from '../../../pages/Success/Success';
import CartItems from '../CartItems/CartItems/CartItems';


const Cart = ({ handleClose, lgShow, placeOrder, handlePlaceOrder, handleBackToCart, setSuccess, success, setCheckForPlaceOrder }) => {


    return (
        <>
            <Modal
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                animation={false}
                size="lg"
                show={lgShow}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="shadowsFont fw-bold">MyCart<GiIcons.GiShoppingCart className="fw-bold ms-1 fs-3" /></Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container className="text-center">

                        {
                            !placeOrder ? <>
                                <h2 className="shadowsFont text-warning">Product Details</h2>
                                <CartItems setCheckForPlaceOrder={setCheckForPlaceOrder} />
                            </> :
                                !success ?
                                    <PlaceOrder setSuccess={setSuccess} />
                                    :
                                    <Success />
                        }

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    {
                        !placeOrder ?

                            <>
                                <Button variant="secondary" className="btnFocus" onClick={handleClose}>Close</Button>
                                <Button variant="primary" className="btnFocus" onClick={handlePlaceOrder}>PlaceOrder</Button>
                            </>
                            :
                            !success ?
                                <>
                                    <Button variant="primary" className="btnFocus" onClick={handleBackToCart}>View Cart</Button>
                                    <Button variant="secondary" className="btnFocus" onClick={handleClose}>Close</Button>
                                </>
                                :
                                <Button variant="success" className="btnFocus" onClick={handleClose}>Okay</Button>

                    }


                </Modal.Footer>
            </Modal>
        </>
    );
}


export default Cart;