import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { crearProducto } from "../../helpers/queries";
import Swal from "sweetalert2";

const CrearProducto = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (productoNuevo) => {
    if(!productoNuevo.precioAnterior)
    {
      productoNuevo.precioAnterior = null;
    }
    crearProducto(productoNuevo).then((respuesta) => {
      if (respuesta.status == 201) {
        Swal.fire(
          "Producto Creado !",
          `el producto ${productoNuevo.nombreProducto} se creó correctamente.`,
          "success"
        );
        reset();
        navigate('/administrador');
      } else {
        Swal.fire("ERROR !", `Intente nueva mente`, "error");
      }
    });
  };
  return (
    <div className="container mainSection ">
      <h1 className="text-center">Nuevo Producto</h1>
      <hr />
      <Form className="bgForm m-3 p-3" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formPlatoNombre">
          <Form.Label>Nombre del plato</Form.Label>

          <Form.Control
            type="text"
            placeholder="ingrese el nombre del plato"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 ",
              },
              maxLength: {
                value: 200,
                message: "La cantidad maxima es de caracteres es de 200 ",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlatoImg">
          <Form.Label>Imagen </Form.Label>
          <Form.Control
            type="text"
            placeholder="ingrese el link de la imagen del Producto"
            {...register("imagen", {
              required: "La imagen es obligatoria",
              pattern:{
                value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp)$/,
                message: 'La imagen debe ser un link y de tipo jpg o gif o png o webp'
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlatoPrecio">
          <Form.Label>Precio Nuevo</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el precio nuevo"
            min={1}
            {...register("precioNuevo", {
              required: "El precio del producto es obligatorio",
              min: {
                value: 50,
                message: "El precio es minimo es de 50",
              },
              max: {
                value: 10000,
                message: "El precio precio maximo es de 10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precioNuevo?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlatoPrecioAnterior">
          <Form.Label>Precio anterior</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el precio anterior"
            min={1}
            {...register("precioAnterior", {
              min: {
                value: 50,
                message: "El precio es minimo es de 50",
              },
              max: {
                value: 10000,
                message: "El precio maximo es de 10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precioAnterior?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlatoDescripcion">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="ingrese separado por un - los ingredientes"
            as="textarea"
            rows={3}
            {...register("descripcion", {
              required: "la descripcion del producto es obligatorio",
              minLength: {
                value: 10,
                message:
                  "la descripcion del Producto tiene un minimo es de 10 caracteres",
              },
              maxLength: {
                value: 10000,
                message:
                  "la descripcion del Producto tiene un maximo es de 10000 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlatoCategoria">
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "la categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="acompaniamientos">acompaniamientos</option>
            <option value="bebida caliente">bebida caliente</option>
            <option value="bebida con alcohol">bebida con alcohol</option>
            <option value="bebida fria">bebida fria</option>  
            <option value="entrada">entrada</option>
            <option value="plato fuerte">plato fuerte</option>
            <option value="postre">postre</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}        
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default CrearProducto;
