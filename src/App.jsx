import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';
import Login from './components/views/Usuarios/Login';
import Administrador from './components/views/Usuarios/Administrador';
import Registrarse from './components/views/Usuarios/Registrarse';
import Error404 from './components/views/Error404';

function App() {

  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/login' element={<Login></Login>}></Route>
        <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
        <Route exact path='/registrarse' element={<Registrarse></Registrarse>}></Route>
        <Route exact path='*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
