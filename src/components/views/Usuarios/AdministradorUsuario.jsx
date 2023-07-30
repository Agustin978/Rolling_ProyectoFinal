import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useEffect , } from "react";
import {  obtenerUsuarios } from "../../helpers/queries";
import { useNavigate } from "react-router-dom";
import ItemUsarios from "./ItemUsarios";
const AdministradorUsuario = () => {
    const navegacion = useNavigate();
  
    const [usuario ,setUsuario] = useState([])
    useEffect(()=>{
      obtenerUsuarios().then((respuesta)=>{

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
              <th>Nombre</th>
              <th>email</th>
              <th>Tipo</th>
              <th>Opciones</th>
            </tr>
        </thead>
        <tbody>{
        usuario.map((usu )=> <ItemUsarios key={usu._id} usuario={usu} setUsuario={setUsuario}></ItemUsarios>)
        }
      
      </tbody>
        
 
      </Table>
    </section>
    )
};

export default AdministradorUsuario;