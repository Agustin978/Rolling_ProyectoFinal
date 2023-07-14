import { Form, Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login, registrarUsuario } from "../../helpers/queries";
import Swal from "sweetalert2";

const Registrarse = ({show, handleClose, setUsuarioLogueado}) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const navigate = useNavigate();

    const onSubmit = (usuarioNuevo) =>
    {
        registrarUsuario(usuarioNuevo).then(respuesta => {
            if(respuesta === 200)
            {
                Swal.fire('Su usuario se creo exitosamente', ':)', 'success');
                navigate('/');
                login(usuarioNuevo).then(respuesta => 
                    {
                        sessionStorage.setItem('user', JSON.stringify(respuesta));
                        setUsuarioLogueado(respuesta);
                        handleClose();
                    });
            }else if(respuesta)
            {
                Swal.fire('Error', respuesta, 'error');
            }else
            {
                Swal.fire('Error', 'Hay inconvenientes para conectarse a la base de datos actualmente. Por favor, Intenta nuevamente mas tarde.', 'error');
                handleClose();
                reset();
                navigate('/');
            }
        })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="fw-bolder">Registrarse</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicUsuario">
                        <Form.Label className="fw-bold">Usuario:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su nombre de usuario"
                            {...register('nombreUsuario',
                            {
                                required:'Debe ingresar un nombre de usuario',
                                minLength:{
                                    value:4,
                                    message:'El nombre de usuario debe contener como minimo 4 caracteres.'
                                },
                                maxLength:{
                                    value:14,
                                    message:'El nombre de usuario debe contener como minimo 14 caracteres.'
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.nombreUsuario?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-bold">Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="emailDeEjemplo@gmail.com"
                            {...register('email',
                            {
                                required: 'El email es obligatorio',
                                minLength:{
                                    value:8,
                                    message:'El email, debe contener como minimo 8 caracteres.'
                                },
                                maxLength:{
                                    value:40,
                                    message:'El email, debe contener como minimo 40 caracteres.'
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
                        <Form.Label className="fw-bold">Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="*******"
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
                                value:/^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-z]).{6,}$/,
                                message:'La contraseña proporcionada es invalida. La misma debe contener:\n-> Al menos una mayuscula.\n-> Al menos un caracter especial.\n-> Al menos una letra minuscula.\n-> Al menos 6 caracteres.'
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.password?.message}
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
                        <Form.Label className="fw-bold">Confirmar contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="*******"
                            {...register('password_r',
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
                                value:/^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-z]).{6,}$/,
                                message:'La contraseña proporcionada es invalida. La misma debe contener:\n-> Al menos una mayuscula.\n-> Al menos un caracter especial.\n-> Al menos una letra minuscula.\n-> Al menos 6 caracteres.'
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.password_r?.message}
                        </Form.Text>
                    </Form.Group>
                    <div className="text-end">
                        <Button variant="danger" onClick={handleClose} className="me-2">
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            Registrar Usuario
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Registrarse;