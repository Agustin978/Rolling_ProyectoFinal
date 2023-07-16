import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Login from '../views/Usuarios/Login';
import Registrarse from '../views/Usuarios/Registrarse';

const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegistro, setshowRegistro] = useState();
    const navigate = useNavigate();
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    const handleCloseRegistro = () => setshowRegistro(false);
    const handleShowRegistro = () => setshowRegistro(true);

    const logout = () => 
    {
        sessionStorage.removeItem('user');
        setUsuarioLogueado({});
        navigate('/');
    }

    return (
        <Navbar className='colorBase' variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>RollingFoods</Navbar.Brand>
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
                                            {/*<NavLink end className='nav-item nav-link' to={'/administrador'}>Administrador</NavLink>*/}
                                            <NavDropdown title='Administrador' className='' id="dropdownAdministrador">
                                                <NavDropdown.Item href='/administrador'>Platillos</NavDropdown.Item>
                                                <NavDropdown.Item href='administrador/pedidos'>Pedidos</NavDropdown.Item>
                                                <NavDropdown.Item href='administrador/usuarios'>Usuarios</NavDropdown.Item>
                                            </NavDropdown>
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
                                <NavLink end className='nav-item nav-link' onClick={handleShowLogin}>Login</NavLink>
                                {
                                    showLogin  && <Login show={showLogin} handleClose={handleCloseLogin} setUsuarioLogueado={setUsuarioLogueado} handleShowRegistro={handleShowRegistro}></Login>
                                }
                                <NavLink end className='nav-item nav-link' onClick={handleShowRegistro}>Registrarse</NavLink>
                                {
                                    showRegistro && <Registrarse show={showRegistro} handleClose={handleCloseRegistro} setUsuarioLogueado={setUsuarioLogueado}></Registrarse>
                                }
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