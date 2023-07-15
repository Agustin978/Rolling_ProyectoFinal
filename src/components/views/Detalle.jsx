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
                <Col md={7} lg={6} className="px-4 h-100">
                    <h3 className='pt-4 pb-2 py-xl-4'>Ñoquis de Papa en Salsa de Tomate Casera</h3>
                    <p className='pb-xl-4'> Estos suaves ñoquis caseros son acompañados con una rica salsa de tomate preparada con ingredientes
                         frescos y especias seleccionadas, creando una combinación perfecta de sabores que te dejará deseando más.</p>
                    <div className='d-flex'>
                        <p className='pe-5 fw-bold'>Precio: $0,00</p>
                        <p className='fw-bold text-decoration-line-through text-danger'>Antes: $0,00</p>
                    </div>
                    <>
                    <Form>
                        <Form.Group className="mb-3 d-flex" controlId="formCantidad">
                            <Form.Label className='pe-3'>Cantidad: </Form.Label>
                            <Form.Control
                                type="number"
                                defaultValue="1"
                                className='inputDetail'
                                {...register("cantidad", {
                                    required: "La cantidad debe ser 1 o más",
                                    min: {
                                        value: 1,
                                        message: "La cantidad minimo es de 1",
                                    },
                                    max: {
                                        value: 50,
                                        message: "La cantidad ingresada supera el stock disponible",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.cantidad?.message}
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    
                    </>
                    <Button variant="dark" className="w-100 rounded-0 py-3 mt-xl-3">Agregar al carrito</Button>
                </Col>

            </Row>
        </Container>
    );
};

export default Detalle;