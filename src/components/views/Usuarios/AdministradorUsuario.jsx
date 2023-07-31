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
              <th>Numero</th>
              <th>Nombre</th>
              <th>email</th>
              <th>Tipo</th>
              <th>Opciones</th>
            </tr>
        </thead>
        <tbody>{
        usuario.map((usu, index)=> <ItemUsarios key={usu._id} usuario={usu} setUsuario={setUsuario} contadorUsuarios={index+1}></ItemUsarios>)
        }
      
      </tbody>
        
 
      </Table>
    </section>
    )
};

export default AdministradorUsuario;