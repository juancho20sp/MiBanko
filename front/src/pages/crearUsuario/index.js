import React from "react";
import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

const CrearCuenta = () => {
    return (
        <RootWrapperCrearCuenta>
            <Rectangle5 />
            <CrearUsuario>
                Crear usuario
            </CrearUsuario>
            <Rectangle1 />
            <Rectangle10 />
            <Rectangle7 />
            <Rectangle8 />
            <Rectangle6 />
            <Rectangle11 />
            <Rectangle2 />
            <Rectangle9 />
            <Nombre placeholder="Nombre"/>
            <TipoDeDocumento  placeholder="TipoDeDocumento">
					<option value="" hidden>
						Tipo
					</option>
					<option value="CC">C.C</option>
					<option value="TI">T.I</option>
			</TipoDeDocumento>
            <Usuario placeholder="Usuario"/>
            <Email placeholder="Email"/>
            <Apellido placeholder="Apellido"/>
            <NúmeroDeDocumento placeholder="NúmeroDeDocumento" type="number"/>
            <Contraseña placeholder="Contraseña" type="password"/>
            <ConfirmarContraseña placeholder="ConfirmarContraseña" type="password"/>
            <Rectangle3 />
            <CrearCuentaBtn to={'/homeUsuario'}>
                Crear cuenta
            </CrearCuentaBtn>
            
        </RootWrapperCrearCuenta>
    )
}
export default CrearCuenta
const RootWrapperCrearCuenta = styled.div`
	min-height: 100vh;
	background-color: rgba(255, 255, 255, 1);
	position: relative;
`;

const Rectangle5 = styled.div`
	width: 1257px;
	height: 603px;
	background-color: rgba(196, 196, 196, 0.3);
	border: solid 1px rgba(0, 0, 0, 1);
	border-radius: 20px;
	position: absolute;
	left: 127px;
	top: 283px;
`;

const CrearUsuario = styled.span`
	color: rgba(0, 0, 0, 1);
	text-overflow: ellipsis;
	font-size: 60px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 576px;
	top: 179px;
`;

const Rectangle1 = styled.div`
	width: 562px;
	height: 70px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 20px;
	position: absolute;
	left: 178px;
	top: 453px;
`;

const Rectangle10 = styled.div`
	width: 562px;
	height: 70px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 20px;
	position: absolute;
	left: 179px;
	top: 351px;
`;

const Rectangle7 = styled.div`
	width: 562px;
	height: 70px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 20px;
	position: absolute;
	left: 178px;
	top: 549px;
`;

const Rectangle8 = styled.div`
	width: 562px;
	height: 70px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 20px;
	position: absolute;
	left: 768px;
	top: 543px;
`;

const Rectangle6 = styled.div`
	width: 562px;
	height: 70px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 20px;
	position: absolute;
	left: 768px;
	top: 447px;
`;

const Rectangle11 = styled.div`
	width: 562px;
	height: 70px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 20px;
	position: absolute;
	left: 769px;
	top: 345px;
`;

const Rectangle2 = styled.div`
	width: 562px;
	height: 70px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 20px;
	position: absolute;
	left: 178px;
	top: 656px;
`;

const Rectangle9 = styled.div`
	width: 562px;
	height: 70px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 20px;
	position: absolute;
	left: 768px;
	top: 651px;
`;

const Nombre = styled.input`
background: rgba(196, 196, 196, 1);
	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 204px;
	top: 465px;
`;

const TipoDeDocumento = styled.select`
	background: rgba(196, 196, 196, 1);
	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 205px;	
	top: 363px;
	width: 490px;
`;

const Usuario = styled.input`
background: rgba(196, 196, 196, 1);
	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 204px;
	top: 561px;
`;

const Email = styled.input`
background: rgba(196, 196, 196, 1);
	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 794px;
	top: 555px;
`;

const Apellido = styled.input`
background: rgba(196, 196, 196, 1);
	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 794px;
	top: 459px;
`;

const NúmeroDeDocumento = styled.input`
background: rgba(196, 196, 196, 1);
	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 795px;
	top: 357px;
`;

const Contraseña = styled.input`
background: rgba(196, 196, 196, 1);
	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 204px;
	top: 668px;
`;

const ConfirmarContraseña = styled.input`
background: rgba(196, 196, 196, 1);
	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 794px;
	top: 663px;
`;

const Rectangle3 = styled.div`
	width: 262px;
	height: 61px;
	background-color: rgba(113, 107, 107, 1);
	border-radius: 20px;
	position: absolute;
	left: 622px;
	top: 763px;
`;

const CrearCuentaBtn  =styled(LinkR)`
	color: rgba(255, 255, 255, 1);
	text-overflow: ellipsis;
	font-size: 30px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 667px;
	top: 776px;
`;

const Rectangle11_0001 = styled.div`
	width: 82px;
	height: 70px;
	background-color: rgba(0, 0, 0, 1);
	border-radius: 20px;
	position: absolute;
	left: 658px;
	top: 351px;
`;

const Polygon2 = styled.svg`
	width: 45px;
	height: 52px;
	position: absolute;
	left: 677px;
	top: 360px;
	transform: rotate(180deg);
`;

