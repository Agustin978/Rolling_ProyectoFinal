import Table from "react-bootstrap/Table";
import { useEffect , } from "react";
import { obtenerPedidos } from "../../helpers/queries";
import { useNavigate } from "react-router-dom";
import ItenPedido from "./ItenPedido";

const AdministradorProductos = () => {
    const navegacion = useNavigate();
  
    const [pedido ,setPedido] = useState([])
    useEffect(()=>{
        obtenerPedidos().then((respuesta)=>{
        if(respuesta){
          setPedido(respuesta);
        }else{
          navegacion('/error404');
        }
       
        // todo: resolver la situacion cuando no puedo realizar la conexion a la API
        
      })
    },[])
    
    return (
   
        <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Administrador Pedidos</h1>
         
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
          <tr>
                <th>Fecha</th>
                <th>Usuario</th>
                <th>Detalle de Pedido</th>
                <th>Estado</th>
                <th>Opciones</th>
              </tr>
          </thead>
          <tbody>{
            pedido.map((ped )=> <ItenPedido key={ped.id} pedido={ped} setPedido={setPedido}></ItenPedido>)
          }
        
        </tbody>
          
   
        </Table>
      </section>
      )
};

export default AdministradorProductos;