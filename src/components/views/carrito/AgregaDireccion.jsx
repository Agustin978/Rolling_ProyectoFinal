import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { confirmaPedidos } from "../../helpers/queries";
import Swal from "sweetalert2";

const AgregaDireccion = ({pedidos, showDireccion, handleCloseDireccion}) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();

    const onSubmit = (direccion) =>
    {
        //console.log(direccion.direccionPedido);
        pedidos.forEach((pedido)=>
        {
            pedido.direccion = direccion.direccionPedido;
            confirmaPedidos(pedido).then(respuesta => 
                {
                    if(respuesta === 400)
                    {
                        Swal.fire('Error',`A ocurrido un error al enviar el pedido ${pedido.nombreProducto}`,'error');
                    }
                });
        });
        handleCloseDireccion();
        Swal.fire({
            icon: 'success',
            title: 'Su pedido fue realizado!',
            showConfirmButton: true,
            confirmButtonColor: "#42D84B",
        });
        
    }

    return( 
        <Modal show={showDireccion} onHide={handleCloseDireccion}>
            <Modal.Header>
                <Modal.Title>Ingrese la direccion para el pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
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
                    <div className="text-end">
                        <Button variant="danger" onClick={handleCloseDireccion} className="me-2">
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </div> 
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AgregaDireccion;