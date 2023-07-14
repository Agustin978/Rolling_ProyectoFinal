import React from 'react';
import BannerInicio from './BannerInicio';
import CardProducto from './producto/CardProducto';
import { Container, Row } from 'react-bootstrap';

const Inicio = () => {
    return (
        <section>
            <BannerInicio></BannerInicio>
            <Container>
                <Row className='mt-3'>
                <CardProducto></CardProducto>
            <CardProducto></CardProducto>
            <CardProducto></CardProducto>
            <CardProducto></CardProducto>
            <CardProducto></CardProducto>
                </Row>
            
            </Container>
           
        </section>
        
    );
};

export default Inicio;