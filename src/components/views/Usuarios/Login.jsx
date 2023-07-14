import { Form, Button, Container, Card } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const Login = ({show, handleClose}) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const navigate = useNavigate();

    const onSubmit = (usuario) => {
        console.log(usuario);
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
                                value:/^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-z]).{6,}$/,
                                message:'La contraseña proporcionada es invalida. La misma debe contener:\n-> Al menos una mayuscula.\n-> Al menos un caracter especial.\n-> Al menos una letra minuscula.\n-> Al menos 6 caracteres.'
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.password?.message}
                        </Form.Text>
                    </Form.Group>
                    <div className="text-end">
                        <Button variant="primary" type="submit">
                            Ingresar
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    );
};

export default Login;