import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';
import Error404 from './components/views/Error404';
import Detalle from './components/views/Detalle';
import RutasAdministrador from './components/Routes/RutasAdministrador';
import { useState } from 'react';
import RutasProtegidas from './components/Routes/RutasProtegidas';
import SobreNosotros from './components/views/SobreNosotros';
import favicon from './assets/miniPng.png';

function App() {
  const usuarioEnLocalStorage = JSON.parse(sessionStorage.getItem('user')) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioEnLocalStorage);

  return (
    <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}/>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path="/sobreNosotros" element={<SobreNosotros></SobreNosotros>}></Route>
        <Route path='/administrador/*' element={
          <RutasProtegidas>
            <RutasAdministrador></RutasAdministrador>
          </RutasProtegidas>
        }></Route>
        <Route exact path="/detalle" element={<Detalle></Detalle>}></Route>
        <Route exact path='*' element={<Error404></Error404>}></Route>
      </Routes>
     
      <Footer/>
    </BrowserRouter>
  )
}

export default App