import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

const PlaceOrder = () => {

    const [lgShow, setLgShow] = useState(false);


    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                animation={false}
                centered
                size="lg"
                show={lgShow}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>
                                .col-xs-12 .col-md-8
                            </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
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


export default PlaceOrder;