import { React, useState, useEffect } from "react";
import {
  RootWrapperLogin,
  MiBanko,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Rectangle4,
  Rectangle5,
  ContraseñaInput,
  CrearCuentaBtn,
  IngresarBtn,
  UsuarioInput,
} from "./LoginElements.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  let history = useNavigate();

  const handlers = {
    crearCuenta: handlesubmit_crearCuenta,
    homeUsuario: handlesubmit_homeUsuario,
  };
  const submitHandler = (e) => {
    const { id } = e.nativeEvent.submitter;
    handlers[id](e);
  };

  function handlesubmit_crearCuenta(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    history("/crearCuenta");
    event.target.reset();
  }

  function handlesubmit_homeUsuario(event) {
    event.preventDefault();
    //
    const data = new FormData(event.currentTarget);
    let location = "api/v1/login";
    let body = {};
    body = {
      email: data.get("user"),
      password: data.get("password"),
    };
    axios.post(window.$dir + location + `/`, body).then((response) => {
      if (response.user && response.user.token) {
        localStorage.setItem('user',JSON.stringify(response));
      }
    });
    history("/home");
    event.target.reset();
  }

  return (
    <div className="form-content">
      <form onSubmit={submitHandler} className="form" noValidate>
        <RootWrapperLogin>
          <Rectangle5 />
          <MiBanko>MiBanko</MiBanko>
          <Rectangle1 />
          <Rectangle2 />
          <UsuarioInput id="user" name="user" placeholder="Usuario" />
          <ContraseñaInput
            id="password"
            name="password"
            placeholder="Contraseña"
            type="password"
          />
          <Rectangle3 />
          <Rectangle4 />
          <CrearCuentaBtn id="crearCuenta">Crear cuenta</CrearCuentaBtn>
          <IngresarBtn id="homeUsuario">Ingresar</IngresarBtn>
        </RootWrapperLogin>
      </form>
    </div>
  );
};

export default Login;
