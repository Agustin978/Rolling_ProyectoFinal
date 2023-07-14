import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';

function App() {

  return (
    <BrowserRouter>
      <Menu/>
      <Inicio></Inicio>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
