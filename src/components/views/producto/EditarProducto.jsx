import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { editarProducto, obtenerProductosEditar } from '../../helpers/queries';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditarProducto = () => {
  const { id } = useParams();
  //useParams se encarga de conseguir los parametros del link
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const navegacion = useNavigate();
  useEffect(() => {
    obtenerProductosEditar(id).then((respuesta) => {
      console.log(respuesta)
      setValue('nombreProducto', respuesta.nombreProducto);
      setValue('imagen', respuesta.imagen);
      setValue('precioNuevo', respuesta.precioNuevo);
      setValue('precioAnterior', respuesta.precioAnterior);
      setValue('descripcion', respuesta.descripcion);
      setValue('categoria', respuesta.categoria);
    });
  }, []);

  const onSubmit = (productoEditado) => {
    console.log(productoEditado);
    editarProducto(productoEditado, id).then((result) => {
      if (result.status === 200 && result) {
        Swal.fire(
          "Producto Editado !",
          `el producto ${productoEditado.nombreProducto}  se edito correctamente.`,
          "success"
        );
        navegacion('/administrador');
      } else {
        Swal.fire(
          "ERROR !",
          `Intente nueva mente`,
          "error"
        );
      }
    });
  }

  return (
    <div className="container mainSection ">
      <h1 className="text-center">Editar Producto</h1>
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
              pattern: {
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
                message: "El Precio es minimo es de 50",
              },
              max: {
                value: 10000,
                message: "El precio Precio maximo es de 10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precioNuevo?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlatoPrecioViejo">
          <Form.Label>Precio Anterior</Form.Label>
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
              required: "la descripcion del Producto es obligatorio",
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
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoría es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fria">Bebida fria</option>
            <option value="bebida con alcohol">Bebida con alcohol</option>
            <option value="entrada">Entrada</option>
            <option value="plato fuerte">Plato Fuerte</option>
            <option value="acompaniamientos">Acompañamiento</option>
            <option value="postre">Postre</option>
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

export default EditarProducto;