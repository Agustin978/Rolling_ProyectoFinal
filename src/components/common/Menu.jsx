import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Login from '../views/Usuarios/Login';

const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logout = () => 
    {
        sessionStorage.removeItem('user');
        setUsuarioLogueado({});
        navigate('/');
    }

    return (
        <Navbar className='colorBase' variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>Ingresar Titulo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink end className='nav-item nav-link' to={'/'}>Inicio</NavLink>
                    <NavLink end className='nav-item nav-link' to={'*'}>Contacto</NavLink>
                    {
                        usuarioLogueado.type ?(
                            <>
                                {
                                    usuarioLogueado.type === 'admin' ?(
                                        <>
                                            <NavLink end className='nav-item nav-link' to={'/administrador'}>Administrador</NavLink>
                                            <Button variant="dark" onClick={logout}>Logout</Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button variant="dark" onClick={logout}>Logout</Button>
                                        </>
                                    )
                                }
                            </>
                        ):(
                            <>
                                <NavLink end className='nav-item nav-link' onClick={handleShow}>Login</NavLink>
                                {
                                    show  && <Login show={show} handleClose={handleClose} setUsuarioLogueado={setUsuarioLogueado}></Login>
                                }
                                <NavLink end className='nav-item nav-link' to={'/registrarse'}>Registrarse</NavLink>
                            </>
                        )
                    }        
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;