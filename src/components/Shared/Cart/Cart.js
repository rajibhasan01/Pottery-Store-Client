import React from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

const Cart = ({ handleClose, lgShow }) => {

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
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={12} className="text-center">
                                <h2>Page under development</h2>
                                <img src="https://i.ibb.co/pf2ZVTJ/Pin-Clipart-com-kingdom-clipart-5790860.png" className="w-50" alt="" />
                            </Col>
                        </Row>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default Cart;