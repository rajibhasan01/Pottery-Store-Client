import React from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import * as GiIcons from 'react-icons/gi';
import PlaceOrder from '../../../pages/PlaceOrder/PlaceOrder';
import CartItems from '../CartItems/CartItems/CartItems';


const Cart = ({ handleClose, lgShow, placeOrder, handlePlaceOrder }) => {


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
                                <CartItems />
                            </> :
                                <PlaceOrder />
                        }

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {
                        !placeOrder && <Button variant="primary" onClick={handlePlaceOrder}>PlaceOrder</Button>
                    }
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default Cart;