import { Container } from "react-bootstrap";
import "./paginacion.css"
import Pagination from 'react-bootstrap/Pagination';

const Paginacion = ({paginaActual, totalPaginas, cambiarPagina}) => {
    const manejarCambioPagina = (numeroPagina) =>{
        cambiarPagina(numeroPagina)
    }
    return (
        <Container>
        <Pagination className='justify-content-center py-5' size="lg">
        <Pagination.First onClick={()=>manejarCambioPagina(1)}/>
        <Pagination.Prev onClick={()=>manejarCambioPagina(paginaActual-1)}
        disabled={paginaActual ===1}/>
        {[...Array(totalPaginas)].map((item, index)=>(
            <Pagination.Item key={`page-${index+1}`} active={paginaActual === index + 1} onClick={() => manejarCambioPagina(index + 1)}
            >{index + 1}</Pagination.Item>
        ))}

        <Pagination.Next onClick={() => manejarCambioPagina(paginaActual + 1)}
        disabled={paginaActual === totalPaginas}/>
        <Pagination.Last onClick={() => manejarCambioPagina(totalPaginas)}/>
      </Pagination>
      </Container>
      );
};

export default Paginacion;