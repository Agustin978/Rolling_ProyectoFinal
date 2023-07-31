import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';
import Error404 from './components/views/Error404';
import Detalle from './components/views/detalleProducto/Detalle';
import RutasAdministrador from './components/Routes/RutasAdministrador';
import { useState } from 'react';
import RutasProtegidas from './components/Routes/RutasProtegidas';
import RutasProtegidasCarrito from './components/Routes/RutasProtegidasCarrito';
import SobreNosotros from './components/views/SobreNosotros';
import Pedidos from './components/views/carrito/Pedidos';
import Categorias from './components/views/categorias/Categorias';


function App() {
  const usuarioEnLocalStorage = JSON.parse(sessionStorage.getItem('user')) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioEnLocalStorage);
  /*Los show detalles es para abrir una ventana modal donde el usuario podra dejar detalles mas especificos a cerca de sus pedidos*/
  const [showDetalles, setShowDetalles] = useState(false);
  const handleCloseDetalles = () => setShowDetalles(false);
  const handleShowDetalles = () => setShowDetalles(true);
  const logout = () => 
    {
        sessionStorage.removeItem('user');
        localStorage.removeItem('carritoCompras');
        localStorage.removeItem('contadorPedidos');
        setUsuarioLogueado({});
    }

  return (
    <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} logout={logout}/>
      <Routes>
        <Route exact path='/' element={<Inicio usuarioLogueado={usuarioLogueado}></Inicio>}></Route>
        <Route exact path="/SobreNosotros" element={<SobreNosotros></SobreNosotros>}></Route>
        
        <Route path='/administrador/*' element={
          <RutasProtegidas>
            <RutasAdministrador></RutasAdministrador>
          </RutasProtegidas>
        }></Route>
        <Route path="/categorias" element={<Categorias usuarioLogueado={usuarioLogueado} />} />
        <Route path="/categorias/:numeroPagina" element={<Categorias usuarioLogueado={usuarioLogueado} />} />
        <Route path="/pedidos/*" element={<RutasProtegidasCarrito><Pedidos logout={logout}/></RutasProtegidasCarrito>} />
        <Route exact path="/detalle/:id" element={<Detalle usuarioLogueado={usuarioLogueado} showDetalles={showDetalles} handleCloseDetalles={handleCloseDetalles} handleShowDetalles={handleShowDetalles}></Detalle>}></Route>
        <Route exact path="/error" element={<Error404 />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
     
      <Footer/>
    </BrowserRouter>
  )
}

export default App