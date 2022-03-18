import { React, useEffect, useState } from "react";
import axios from "axios";
import {
  RootWrapperHomeUsuario,
  VerMisMovimientosBtn,
  EnviarDineroBtn,
  TodoMiDinero,
  MenúPrincipal,
  SobregirarBtn,
  Rectangle3,
  Rectangle5,
  Rectangle6,
  Rectangle7,
  Rectangle8,
  Rectangle5Stroke,
  Salir,
} from "./menuPrincipalElements.js";
const MenuUsuario = ({ userData }) => {
  const [balance, setBalance] = useState("Cargando..");
  useEffect(() => {
    let location = "api/v1/users";
    let body = {
      usr_doctype: userData.usr_doctype,
      usr_numdoc: userData.usr_numdoc,
    };
    axios
      .post(window.$dir + location + `/getUserBalance`, body)
      .then((response) => {
        if (response.data && response.data.acc_balance) {
          setBalance(response.data.acc_balance);
        }
      });
  }, [userData]);
  return (
    <div>
      <RootWrapperHomeUsuario>
        <Rectangle5Stroke xmlns="http://www.w3.org/2000/svg">
          <path
            fill="rgba(0, 0, 0, 1)"
            d="M624 0.654688L20 0.654688C9.50659 0.654688 1 6.22385 1 13.0938L1 405.906C1 412.776 9.50661 418.345 20 418.345L624 418.345C634.493 418.345 643 412.776 643 405.906L643 13.0938C643 6.22385 634.493 0.654688 624 0.654688ZM20 0C8.95431 0 0 5.86227 0 13.0938L0 405.906C0 413.138 8.95432 419 20 419L624 419C635.046 419 644 413.138 644 405.906L644 13.0938C644 5.86227 635.046 0 624 0L20 0Z"
          />
        </Rectangle5Stroke>
        <Rectangle5 xmlns="http://www.w3.org/2000/svg">
          <path
            fill="rgba(196, 196, 196, 0.3)"
            d="M0 17.0938C0 7.65313 8.95431 0 20 0L624 0C635.046 0 644 7.65313 644 17.0938L644 529.906C644 539.347 635.046 547 624 547L20 547C8.95432 547 0 539.347 0 529.906L0 17.0938Z"
          />
        </Rectangle5>
        <MenúPrincipal>Menú Principal</MenúPrincipal>
        <TodoMiDinero>Todo mi dinero: {balance}</TodoMiDinero>
        <Rectangle3 />
        <Rectangle6 />
        <Rectangle7 />
        <Rectangle8 />
        <EnviarDineroBtn to={"/enviarDinero"}>Enviar dinero</EnviarDineroBtn>
        <VerMisMovimientosBtn to={"/verMovimientos"}>
          Ver mis movimientos
        </VerMisMovimientosBtn>
        <SobregirarBtn to={"/sobregirar"}>Sobregirar</SobregirarBtn>
        <Salir to={"/"}>Salir</Salir>
      </RootWrapperHomeUsuario>
    </div>
  );
};

export default MenuUsuario;
