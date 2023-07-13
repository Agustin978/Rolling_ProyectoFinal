import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <Navbar bg='info' variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>Ingresar Titulo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink end className='nav-item nav-link' to={'/'}>Inicio</NavLink>
                    <NavLink end className='nav-item nav-link' to={'*'}>Contacto</NavLink>
                    <NavLink end className='nav-item nav-link' to={'/administrador'}>Administrador</NavLink>
                    <Button variant="dark">Logout</Button>
                    <NavLink end className='nav-item nav-link' to={'/login'}>Login</NavLink>
                    <NavLink end className='nav-item nav-link' to={'/registrarse'}>Registrarse</NavLink>        
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;