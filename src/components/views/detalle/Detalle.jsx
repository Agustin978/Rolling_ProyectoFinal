import React from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./detalle.css"
import { obtenerProductosEditar } from '../../helpers/queries';
import notImage from "../../../assets/notImage.png";

const Detalle = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const {id} = useParams();
    const [producto, setProductos] =  useState({});
  
    useEffect(()=>{
        obtenerProductosEditar(id).then((respuesta)=>{
        if(respuesta){
          setProductos(respuesta);
        }
      })
    }, [])

    return (
        <Container className='mainSection'>
            <Row className='mt-3 mb-4'>
                <Col md={5} lg={6} className="p-0 d-flex justify-content-center px-4 px-md-0 h-100">
                    <img src={producto.imagen ? producto.imagen : notImage}className='p-md-3 colorBorde rounded-4 imgDetail' alt={producto.nombreProducto} />

                </Col>
                <Col md={7} lg={6} className="px-4 h-100">
                    <h3 className='pt-4 pb-2 py-xl-4 fw-bold'>{producto.nombreProducto}</h3>
                    <p className='pb-xl-4'>{producto.descripcion}</p>
                    <div className='d-flex'>
                        <p className='pe-5 fw-bold fs-5'>Precio: ${producto.precioNuevo}</p>
                        {producto.precioAnterior && (
                            <p className='fw-bold text-decoration-line-through text-danger fs-6'>Antes: ${producto.precioAnterior}</p>
                        )}
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