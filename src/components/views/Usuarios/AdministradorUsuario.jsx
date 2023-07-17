import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { useEffect , } from "react";
import { obtenerUsuario } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemUsarios from "./ItemUsarios";

const AdministradorUsuario = () => {
    const navegacion = useNavigate();
  
    const [usuario ,setUsuario] = useState([])
    useEffect(()=>{
      obtenerUsuario().then((respuesta)=>{
        console.log(respuesta)
        if(respuesta){
          setUsuario(respuesta);
        }else{
          navegacion('/error404');
        }
       
        // todo: resolver la situacion cuando no puedo realizar la conexion a la API
        
      })
    },[])
    return (
   
      <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Administrador Usuarios</h1>
       
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
        <tr>
              <th>Cod</th>
              <th>Nombre</th>
              <th>email</th>
              <th>Tipo</th>
              <th>Opciones</th>
            </tr>
        </thead>
        <tbody>{
        usuario.map((usu )=> <ItemUsarios key={usu.id} usuario={usu} setUsuario={setUsuario}></ItemUsarios>)
        }
      
      </tbody>
        
 
      </Table>
    </section>
    )
};

export default AdministradorUsuario;