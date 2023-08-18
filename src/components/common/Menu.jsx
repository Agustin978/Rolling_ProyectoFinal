import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Login from '../views/Usuarios/Login';
import Registrarse from '../views/Usuarios/Registrarse';
import { Cart4 } from 'react-bootstrap-icons';
import logoNav from '../../assets/logo-nav.png'
import './menu.css'

const Menu = ({usuarioLogueado, setUsuarioLogueado, logout}) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegistro, setshowRegistro] = useState();
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    const handleCloseRegistro = () => setshowRegistro(false);
    const handleShowRegistro = () => setshowRegistro(true);

    return (
        <Navbar className='bg-dark navbar-dark fs-5'  expand="lg">
            <Container>
                <Navbar.Brand as={Link} to={'/'}>
                    <img src={logoNav} alt="logo" className='imgLogo pt-2' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink end className='nav-item nav-link' to={'/'}>Inicio</NavLink>
                    <NavLink end className='nav-item nav-link' to={'*'}>Contacto</NavLink>
                    <NavLink end className='nav-item nav-link' to={'/SobreNosotros'}>Sobre Nosotros</NavLink>
                    {
                        usuarioLogueado.type ?(
                            <>
                                {
                                    usuarioLogueado.type === 'admin' ?(
                                        <>
                                            {/*<NavLink end className='nav-item nav-link' to={'/administrador'}>Administrador</NavLink>*/}
                                            <NavDropdown title='Administrador' className='' id="dropdownAdministrador">
                                                <NavLink end className='nav-item nav-link nav-link' to={'/administrador'}>Platillos</NavLink>
                                                <NavLink end className='nav-item nav-link nav-link' to={'administrador/pedidos'}>Pedidos</NavLink>
                                                <NavLink end className='nav-item nav-link nav-link' to={'administrador/usuarios'}>Usuarios</NavLink>
                                            </NavDropdown>
                                            <Button variant="dark fs-5" onClick={logout}>Logout</Button>
                                        </>
                                    ) : (
                                        <>
                                            <NavLink end className='nav-item nav-link' to={'/pedidos'}><Cart4/></NavLink>
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