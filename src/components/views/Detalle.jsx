import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./Detalle.css"
import { obtenerProductosEditar } from '../helpers/queries';
import notImage from "../../assets/notImage.png";
import Swal from "sweetalert2";
import AgregaDetalles from "./Pedidos/AgregaDetalles";

const Detalle = ({usuarioLogueado, showDetalles, handleCloseDetalles, handleShowDetalles}) => {
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
    }, []);

    const agregaAcarrito = () =>
    {
        if(Object.keys(usuarioLogueado).length===0)
        {
            Swal.fire('Error', 'Debe iniciar secion antes de realizar un pedido.', 'error');
        }else
        {
            handleShowDetalles();
        }
    }

    return (
        <Container>
            <Row className='mt-3 mb-4'>
                <Col md={5} lg={6} className="p-0 d-flex justify-content-center px-4 px-md-0 h-100">
                    <img src={producto.imagen ? producto.imagen : notImage}className='p-md-3 colorBase imgDetail' alt={producto.nombreProducto} />

                </Col>
                <Col md={7} lg={6} className="px-4 h-100">
                    <h3 className='pt-4 pb-2 py-xl-4 fw-bold'>{producto.nombreProducto}</h3>
                    <p className='pb-xl-4'>{producto.descripcion}</p>
                    <div className='d-flex'>
                        <p className='pe-5 fw-bold fs-5'>Precio: ${producto.precioNuevo}</p>
                        {producto.precioViejo && (
                            <p className='fw-bold text-decoration-line-through text-danger fs-6'>Antes: ${producto.precioViejo}</p>
                        )}
                    </div>
                    <Button variant="dark" className="w-100 rounded-0 py-3 mt-xl-3" onClick={agregaAcarrito}>Agregar al carrito</Button> 
                    {
                        showDetalles && <AgregaDetalles showDetalles={showDetalles} handleCloseDetalles={handleCloseDetalles} producto={producto} usuarioLogueado={usuarioLogueado}></AgregaDetalles>
                    } 
                </Col>

            </Row>
        </Container>
    );
};

export default Detalle;