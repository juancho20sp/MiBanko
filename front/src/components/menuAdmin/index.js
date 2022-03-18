import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import axios from "axios";
export function MenuAdmin() {
  const [totalBalance, setTotalBalance] = useState("Cargando..");
  useEffect(() => {
    let location = "api/v1/accounts";
    axios.get(window.$dir + location + `/getBalanceBank`).then((response) => {
      if (response && response.data[0].sum) {
        setTotalBalance(response.data[0].sum);
      }
    });
  }, []);
  return (
    <RootWrapperHomeAdmin>
      <Rectangle5Stroke xmlns="http://www.w3.org/2000/svg">
        <path
          fill="rgba(0, 0, 0, 1)"
          d="M624 0.854687L20 0.854687C9.50659 0.854687 1 8.12516 1 17.0938L1 529.906C1 538.875 9.50661 546.145 20 546.145L624 546.145C634.493 546.145 643 538.875 643 529.906L643 17.0938C643 8.12516 634.493 0.854687 624 0.854687ZM20 0C8.95431 0 0 7.65313 0 17.0938L0 529.906C0 539.347 8.95432 547 20 547L624 547C635.046 547 644 539.347 644 529.906L644 17.0938C644 7.65313 635.046 0 624 0L20 0Z"
        />
      </Rectangle5Stroke>
      <Rectangle5 xmlns="http://www.w3.org/2000/svg">
        <path
          fill="rgba(196, 196, 196, 0.3)"
          d="M0 17.0938C0 7.65313 8.95431 0 20 0L624 0C635.046 0 644 7.65313 644 17.0938L644 529.906C644 539.347 635.046 547 624 547L20 547C8.95432 547 0 539.347 0 529.906L0 17.0938Z"
        />
      </Rectangle5>
      <MenúPrincipal>Menú Principal</MenúPrincipal>
      <TodoElDineroEnElBanco123436>
        Todo el dinero en el banco: {totalBalance}
      </TodoElDineroEnElBanco123436>
      <Rectangle3 />
      <Rectangle6 />
      <Rectangle8 />
      <Rectangle7 />
      <Rectangle9 />
      <EnviarDinero></EnviarDinero>
      <VerTodosLosMovimientos to={"/verMovimientos"}>
        Ver todos los movimientos
      </VerTodosLosMovimientos>
      <VerTotalDeTransferencias to={"/verTotalTransferencias"}>
        Ver total de transferencias
      </VerTotalDeTransferencias>
      <ModificarDineroDeUsuario to={"/modificarDinero"}>
        Modificar dinero de usuario
      </ModificarDineroDeUsuario>
      <AutorizarSobregiros to={"/autorizarSobregiro"}>
        Autorizar sobregiros
      </AutorizarSobregiros>
    </RootWrapperHomeAdmin>
  );
}

const RootWrapperHomeAdmin = styled.div`
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 1);
  position: relative;
`;

const Rectangle5 = styled.svg`
  width: 644px;
  height: 547px;
  position: absolute;
  left: 434px;
  top: 297px;
`;

const Rectangle5Stroke = styled.svg`
  width: 644px;
  height: 547px;
  position: absolute;
  left: 434px;
  top: 297px;
`;

const MenúPrincipal = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 60px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 557px;
  top: 89px;
`;

const TodoElDineroEnElBanco123436 = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 45px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 385px;
  top: 212px;
`;

const Rectangle3 = styled.div`
  width: 559px;
  height: 61px;
  background-color: rgba(113, 107, 107, 1);
  border-radius: 20px;
  position: absolute;
  left: 477px;
  top: 340px;
`;

const Rectangle6 = styled.div`
  width: 559px;
  height: 61px;
  background-color: rgba(113, 107, 107, 1);
  border-radius: 20px;
  position: absolute;
  left: 477px;
  top: 440px;
`;

const Rectangle8 = styled.div`
  width: 559px;
  height: 61px;
  background-color: rgba(113, 107, 107, 1);
  border-radius: 20px;
  position: absolute;
  left: 477px;
  top: 540px;
`;

const Rectangle7 = styled.div`
  width: 559px;
  height: 61px;
  background-color: rgba(113, 107, 107, 1);
  border-radius: 20px;
  position: absolute;
  left: 477px;
  top: 640px;
`;

const Rectangle9 = styled.div`
  width: 559px;
  height: 61px;
  background-color: rgba(113, 107, 107, 1);
  border-radius: 20px;
  position: absolute;
  left: 477px;
  top: 740px;
`;

const EnviarDinero = styled.div`
  color: rgba(255, 255, 255, 1);
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 641px;
  top: 347px;
`;

const VerTodosLosMovimientos = styled(LinkR)`
  color: rgba(255, 255, 255, 1);
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 519px;
  top: 447px;
`;

const VerTotalDeTransferencias = styled(LinkR)`
  color: rgba(255, 255, 255, 1);
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 522px;
  top: 547px;
`;

const ModificarDineroDeUsuario = styled(LinkR)`
  color: rgba(255, 255, 255, 1);
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 522px;
  top: 647px;
`;

const AutorizarSobregiros = styled(LinkR)`
  color: rgba(255, 255, 255, 1);
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 576px;
  top: 747px;
`;
