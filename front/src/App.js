import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import CrearCuenta from "./pages/crearUsuario";
import EnviarDinero from "./pages/enviarDinero";
import { ModificarDinero } from "./pages/modificarDinero";
import { AutorizarSobregiro } from "./pages/autorizarSobregiro";
import { Movimientos } from './pages/verMovimientos';

function App() {  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/crearCuenta" element={<CrearCuenta/>} />
          <Route path="/enviarDinero" element={<EnviarDinero/>} />
          <Route path="/modificarDinero" element={<ModificarDinero/>} />
          <Route path="/autorizarSobregiro" element={<AutorizarSobregiro/>} />
          <Route path="/verMovimientos" element={<Movimientos/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

