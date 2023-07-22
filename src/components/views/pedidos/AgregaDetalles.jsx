import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { agregaPedidoACarrito } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AgregaDetalles = ({showDetalles, handleCloseDetalles, producto, usuarioLogueado}) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const navigate = useNavigate();
    const onSubmit = (datosPedido) => 
    {
        agregaPedidoACarrito(producto, usuarioLogueado, datosPedido).then(respuesta => {
            if(respuesta === 200)
            {
                handleCloseDetalles();
                Swal.fire('Exelente elección','El producto fue agregado al carrito :)', 'success');
                reset();
                navigate('/');
            }else
            {
                Swal.fire('Error', 'A ocurrido un inconveniente al tratar de ingresar tu plato al carrito :(\n Intenta nuevamente mas tarde.','error');
                handleCloseDetalles();
                navigate('/');
            }
        });
    }
    return (
        <Modal show={showDetalles} onHide={handleCloseDetalles}>
            <Modal.Header>
                <Modal.Title>Agregue los detalles de su pedido :) Base: {producto.nombreProducto}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FloatingLabel controlId="formBasicDetalles" label="Detalles" className="mb-3">
                        <Form.Control 
                            as="textarea"
                            placeholder="Deje los detalles que desee aqui."
                            {...register('detallePedido',
                            {
                                minLength:{
                                    value:4,
                                    message:'Los detalles del pedido deben contener como minimo 4 caracteres.'
                                },
                                maxLength:{
                                    value:200,
                                    message:'Los detalles del pedido deben contener como maximo 200 caracteres.'
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.detallePedido?.message}
                        </Form.Text>
                    </FloatingLabel>
                    <Form.Group className="mb-3" controlId="formBasicDireccion">
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su direccion."
                            {...register('direccionPedido',{
                                required:'La direccion es obligatoria para saber a donde se debe realizar el pedido :)',
                                minLength:{
                                    value:5,
                                    message:'La direccion debe tener como minimo 5 caracteres.'
                                },
                                maxLength:{
                                    value:100,
                                    message:'La direccion debe tener como maximo 100 caracteres.'
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.direccionPedido?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCantidad">
                        <Form.Control
                            type="number"
                            defaultValue="1"
                            className='inputDetail'
                            {...register("cantidad", {
                                required: "La cantidad debe ser 1 o más",
                                min: {
                                        value: 1,
                                        message: "La cantidad minimo es de 1",
                                    },
                                max: {
                                        value: 50,
                                        message: "La cantidad ingresada supera el stock disponible",
                                    },
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.cantidad?.message}
                        </Form.Text>
                    </Form.Group>
                    <div className="text-end">
                        <Button variant="danger" onClick={handleCloseDetalles} className="me-2">
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            Agregar
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AgregaDetalles;