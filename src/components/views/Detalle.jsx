import React from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Detalle.css"

const Detalle = () => {
    const navegacion = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={5} lg={6} className="p-0 d-flex justify-content-center px-4 px-md-0 h-100">
                    <img src="https://i.pinimg.com/564x/05/33/02/053302a9710640c0d1c1a93b6801ead8.jpg" className='p-md-3 imgDetail' alt="ñoquis" />

                </Col>

            </Row>
        </Container>
    );
};

export default Detalle;