import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ItemProducto from "./ItemProducto";
import { useEffect , } from "react";
import { obtenerProductos } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AdministradorUsuario = () => {
    const navegacion = useNavigate();
  
    const [producto ,setProductos] = useState([])
    useEffect(()=>{
      obtenerProductos().then((respuesta)=>{
        console.log(respuesta)
        if(respuesta){
          setProductos(respuesta);
        }else{
          navegacion('/error404');
        }
       
        // todo: resolver la situacion cuando no puedo realizar la conexion a la API
        
      })
    },[])
    return (
   
      <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link className="btn btn-primary" to='/administrador/crear'>
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
        <tr>
              <th>Cod</th>
              <th>Nombre</th>
              <th>Precio Final</th>
              <th>Img</th>
              <th className="">Categoria</th>
              <th>Opciones</th>
            </tr>
        </thead>
        <tbody>{
          producto.map((prod )=> <ItemProducto key={prod.id} producto={prod} setProductos={setProductos}></ItemProducto>)
          }
        
        </tbody>
      </Table>
    </section>
    )
};

export default AdministradorUsuario;