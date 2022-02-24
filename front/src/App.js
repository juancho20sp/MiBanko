import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import HomeUsuario from "./pages/homeUsuario";
import CrearCuenta from "./pages/crearUsuario";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/homeUsuario" element={<HomeUsuario/>} />
          <Route path="/crearCuenta" element={<CrearCuenta/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

