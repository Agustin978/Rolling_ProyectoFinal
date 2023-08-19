import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { login } from "../../helpers/queries";
import Swal from 'sweetalert2';

const Login = ({show, handleClose, setUsuarioLogueado, handleShowRegistro}) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const navigate = useNavigate();

    const onSubmit = (usuario) => {
        login(usuario).then(respuesta => 
            {
                if(respuesta.status === 200)
                {
                    delete respuesta.status;
                    sessionStorage.setItem('user', JSON.stringify(respuesta));
                    setUsuarioLogueado(respuesta);
                    Swal.fire('Bienvenido', ':)', 'success');
                    navigate('/');
                    handleClose();  
                }else if(respuesta)
                {
                    Swal.fire('Error', respuesta, 'error');
                    navigate('/');
                }else
                {
                    Swal.fire('Error', 'Email o password incorrectos.', 'error');
                    reset();
                }
            });
    }

    const abreRegistrarse = () => 
    {
        reset();
        handleClose();
        handleShowRegistro();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="fw-bolder">Inicio de Sesión.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Ingrese su email"
                            {...register('email',
                            {
                                required: 'El email es obligatorio',
                                minLength:{
                                    value:8,
                                    message:'El email debe contener como minimo 8 caracteres.'
                                },
                                maxLength:{
                                    value:80,
                                    message:'El email debe contener como maximo 80 caracteres.'
                                },
                                pattern:{
                                    value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message:'El email proporcionado no es valido.'
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.email?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Ingrese su contraseña"
                            {...register('password',
                            {
                                required: 'El password es obligatorio.',
                                minLength:{
                                value:6,
                                message:'La contraseña como minimo debe contener 6 caracteres.'
                                },
                                maxLength:{
                                value:15,
                                message:'La contraseña debe contener como maximo 15 caracteres'
                                },
                                pattern:{
                                value:/^(?=.*[A-Z])(?=.*[@#$%^&+=*'"`!¡])(?=.*[a-z]).{6,15}$/,
                                message:'La contraseña proporcionada es invalida. La misma debe contener:\n-> Al menos una mayuscula.\n-> Al menos un caracter especial.\n-> Al menos una letra minuscula.\n-> Al menos 6 caracteres.'
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.password?.message}
                        </Form.Text>
                    </Form.Group>
                    <div className="text-end">
                        <Button variant="secondary" onClick={abreRegistrarse} className="me-2">
                            Registrarse
                        </Button>
                        <Button variant="primary" type="submit">
                            Iniciar Sesion
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Login;