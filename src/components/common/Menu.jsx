import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Login from '../views/Usuarios/Login';

const Menu = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar className='colorBase' variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>Ingresar Titulo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink end className='nav-item nav-link' to={'/'}>Inicio</NavLink>
                    <NavLink end className='nav-item nav-link' to={'*'}>Contacto</NavLink>
                    <NavLink end className='nav-item nav-link' to={'/administrador'}>Administrador</NavLink>
                    <Button variant="dark">Logout</Button>
                    <NavLink end className='nav-item nav-link' onClick={handleShow}>Login</NavLink>
                    {
                        show  && <Login show={show} handleClose={handleClose}></Login>
                    }
                    <NavLink end className='nav-item nav-link' to={'/registrarse'}>Registrarse</NavLink>        
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;