import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';
import Error404 from './components/views/Error404';
import RutasAdministrador from './components/Routes/RutasAdministrador';
import { useState } from 'react';
import RutasProtegidas from './components/Routes/RutasProtegidas';
import favicon from './assets/miniPng.png';

function App() {
  const usuarioEnLocalStorage = JSON.parse(sessionStorage.getItem('user')) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioEnLocalStorage);

  return (
    <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}/>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/administrador/*' element={
          <RutasProtegidas>
            <RutasAdministrador></RutasAdministrador>
          </RutasProtegidas>
        }></Route>
        <Route exact path='*' element={<Error404></Error404>}></Route>
      </Routes>
      <section className="mb-0">
        <iframe
          style={{ width: "100%", height: "360px" }}
          src="https://maps.google.com/maps?q=Mu%C3%B1ecas%20643,%20San%20Miguel%20de%20Tucum%C3%A1n,%20Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </section>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
