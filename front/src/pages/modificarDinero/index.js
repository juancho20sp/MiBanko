import React from "react";
import styled from "styled-components";

export function ModificarDinero () {
	return (	
	<RootWrapperModificarDinero>
    <ModificarDineroDeUsuario>
      Modificar dinero de usuario
    </ModificarDineroDeUsuario>
  <Rectangle11/>
  <Rectangle12/>
  <NombreDeUsuario>
      Nombre de usuario
    </NombreDeUsuario>
  <Ellipse1/>
  <Line1/>
  <DineroDelUsuario123436>
      Dinero del usuario: $1234.36
    </DineroDelUsuario123436>
  <Group3>
      <Group1>
        <Ellipse2/>
      <Consignar>
          Consignar
        </Consignar>
      </Group1>
    <Group2>
        <Ellipse2_0001/>
      <Retirar>
          Retirar
        </Retirar>
      </Group2>
    </Group3>
  <Rectangle6/>
  <Rectangle13/>
  <_123436>
       $1234.36
    </_123436>
  <Valor>
      Valor
    </Valor>
  <Rectangle10 xmlns="http://www.w3.org/2000/svg">
      <path fill="rgba(196, 196, 196, 0.3)" d="M0 18.8125C0 8.42264 9.78856 0 21.8634 0L682.137 0C694.211 0 704 8.42264 704 18.8125L704 583.188C704 593.577 694.211 602 682.137 602L21.8634 602C9.78858 602 0 593.577 0 583.188L0 18.8125Z"/>
    </Rectangle10>
  <RealizarTransacción>
      Realizar transacción
    </RealizarTransacción>
  </RootWrapperModificarDinero>	
)
}

const RootWrapperModificarDinero = styled.div`
	min-height: 100vh;
	background-color: rgba(255, 255, 255, 1);
	position: relative;
`;

const ModificarDineroDeUsuario = styled.span`
	color: rgba(0, 0, 0, 1);
	text-overflow: ellipsis;
	font-size: 60px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 391px;
	top: 67px;
`;

const Rectangle11 = styled.div`
	width: 562px;
	height: 70px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 20px;
	position: absolute;
	left: 485px;
	top: 182px;
`;

const Rectangle12 = styled.div`
	width: 82px;
	height: 70px;
	background-color: rgba(0, 0, 0, 1);
	border-radius: 20px;
	position: absolute;
	left: 965px;
	top: 182px;
`;

const NombreDeUsuario = styled.span`
	color: rgba(0, 0, 0, 1);
	text-overflow: ellipsis;
	font-size: 35px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 494px;
	top: 196px;
`;

const Ellipse1 = styled.div`
	width: 35px;
	height: 35px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 18px;
	position: absolute;
	left: 997px;
	top: 193px;
`;

const Line1 = styled.div`
	width: 17px;
	height: 13px;
	border: solid 5px rgba(196, 196, 196, 1);
	position: absolute;
	left: 983px;
	top: 220px;
	transform: rotate(217deg);
`;

const DineroDelUsuario123436 = styled.span`
	color: rgba(0, 0, 0, 1);
	text-overflow: ellipsis;
	font-size: 45px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 465px;
	top: 298px;
`;

const Group3 = styled.div`
	width: 520px;
	height: 47px;
	position: absolute;
	left: 496px;
	top: 390px;
`;

const Group1 = styled.div`
	width: 246px;
	height: 47px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Ellipse2 = styled.div`
	width: 47px;
	height: 47px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 24px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Consignar = styled.span`
	color: rgba(0, 0, 0, 1);
	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 64px;
	top: 0px;
`;

const Group2 = styled.div`
	width: 181px;
	height: 47px;
	position: absolute;
	left: 339px;
	top: 0px;
`;

const Ellipse2_0001 = styled.div`
	width: 47px;
	height: 47px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 24px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Retirar = styled.span`
	color: rgba(0, 0, 0, 1);
	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 64px;
	top: 0px;
`;

const Rectangle6 = styled.div`
	width: 562px;
	height: 70px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 20px;
	position: absolute;
	left: 485px;
	top: 531px;
`;

const Rectangle13 = styled.div`
	width: 562px;
	height: 70px;
	background-color: rgba(113, 107, 107, 1);
	border-radius: 20px;
	position: absolute;
	left: 485px;
	top: 648px;
`;

const _123436 = styled.span`
	color: rgba(0, 0, 0, 1);
	text-overflow: ellipsis;
	font-size: 45px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 491px;
	top: 539px;
`;

const Valor = styled.span`
	color: rgba(0, 0, 0, 1);
	text-overflow: ellipsis;
	font-size: 30px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 496px;
	top: 496px;
`;

const Rectangle10 = styled.svg`
	width: 704px;
	height: 602px;
	position: absolute;
	left: 404px;
	top: 153px;
`;

const RealizarTransacción = styled.span`
	color: rgba(255, 255, 255, 1);
	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 585px;
	top: 660px;
`;

