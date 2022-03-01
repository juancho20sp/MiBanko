import { React, useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


const EnviarDinero = (userData) => {
	let history = useNavigate();
	const [banks, setBanks] = useState([" "]);
	useEffect(() => {
		let location = 'api/v1/account';
		axios.get(window.$dir + location + `/getAllBanks`)
			.then((response) => {
				console.log(Object.keys(response.data));
				let banksArray = [];
				for (let i = 1; i < Object.keys(response.data).length; i++) {
					console.log("res2");
					banksArray.push(response.data[i]);
				}
				setBanks(banksArray);
			})
	}, [userData])

	function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
		let location ='api/v1/account';
		let body  = {
			cantidad: data.get('cantidad'),
			cuenta: data.get('cuenta'),
			banco: data.get('banco'),
		}
		console.log(body);
		axios.post(window.$dir + location + `/sendMoney`,body)
			.then((response) => {
			console.log(response.status);
			console.log(response.data);
				if (response.status === 200) {
					Swal.fire(
						'Dinero enviado correctamente',
						'success'
						);
				} else {
				Swal.fire("Something is Wrong :(!", "try again later", "error");
				}     
			})
		history('/home'); //<- TODO : Esto va dento del axios
        //event.target.reset(); <- Limpiar formulario
    }

	return (
        <div className='form-content'>
        <form onSubmit={handleSubmit} className='form' noValidate>
		<RootWrapperEnviarDinero>
			<Polygon1 xmlns="http://www.w3.org/2000/svg">
				<path fill="rgba(196, 196, 196, 1)" d="M22.5 0L41.9856 39L3.01443 39L22.5 0Z" />
			</Polygon1>
			<Rectangle5Stroke xmlns="http://www.w3.org/2000/svg">
				<path fill="rgba(0, 0, 0, 1)" d="M624 0.821875L20 0.821875C9.50659 0.821875 1 7.81323 1 16.4375L1 509.562C1 518.187 9.50661 525.178 20 525.178L624 525.178C634.493 525.178 643 518.187 643 509.562L643 16.4375C643 7.81323 634.493 0.821875 624 0.821875ZM20 0C8.95431 0 0 7.35932 0 16.4375L0 509.562C0 518.641 8.95432 526 20 526L624 526C635.046 526 644 518.641 644 509.562L644 16.4375C644 7.35932 635.046 0 624 0L20 0Z" />
			</Rectangle5Stroke>
			<Rectangle5 xmlns="http://www.w3.org/2000/svg">
				<path fill="rgba(196, 196, 196, 0.3)" d="M0 16.4375C0 7.35932 8.95431 0 20 0L624 0C635.046 0 644 7.35932 644 16.4375L644 509.562C644 518.641 635.046 526 624 526L20 526C8.95432 526 0 518.641 0 509.562L0 16.4375Z" />
			</Rectangle5>
			<EnviarDineroStr>
				Enviar Dinero
			</EnviarDineroStr>
			<Rectangle3 />
			<EnviarDinero_0001 > Enviar Dinero </EnviarDinero_0001 >
			<Rectangle6 />
			<Rectangle10 />
			<Rectangle8 />
			<Cantidad type="number" name="cantidad" placeholder="$" />
			<Cuenta name="cuenta" placeholder ="Cuenta : " type="number"/>
			<SeleccionarBanco name="banco" >
				<option value="" hidden>seleccione un Banco</option>
				{banks.map((element) => {
					return (
						<option key={element} value={element}>{element}</option>
					);
				})}
			</SeleccionarBanco>

		</RootWrapperEnviarDinero>
		</form>
	</div>
	)
}
export default EnviarDinero

const RootWrapperEnviarDinero = styled.div`
	min-height: 100vh;
	background-color: rgba(255, 255, 255, 1);
	position: relative;
`;

const Rectangle5 = styled.svg`
	width: 644px;
	height: 526px;
	position: absolute;
	left: 433px;
	top: 191px;
`;

const EnviarDineroStr = styled.span`
	color: rgba(0, 0, 0, 1);
	text-overflow: ellipsis;
	font-size: 60px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 580px;
	top: 89px;
`;

const Rectangle3 = styled.div`
	width: 559px;
	height: 61px;
	background-color: rgba(113, 107, 107, 1);
	border-radius: 20px;
	position: absolute;
	left: 477px;
	top: 618px;
`;

const EnviarDinero_0001 = styled.button`
	background-color: rgba(113, 107, 107, 1);
	color:  rgba(255, 255, 255, 1);	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 641px;
	top: 625px;
`;

const Rectangle6 = styled.div`
	width: 562px;
	height: 70px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 20px;
	position: absolute;
	left: 474px;
	top: 222px;
`;

const Rectangle10 = styled.div`
	width: 562px;
	height: 70px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 20px;
	position: absolute;
	left: 474px;
	top: 485px;
`;

const Rectangle8 = styled.div`
	width: 562px;
	height: 70px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 20px;
	position: absolute;
	left: 474px;
	top: 355px;
`;

const Rectangle9 = styled.div`
	width: 82px;
	height: 70px;
	background-color: rgba(0, 0, 0, 1);
	border-radius: 20px;
	position: absolute;
	left: 954px;
	top: 355px;
`;

const Cantidad = styled.input`
	background: rgba(196, 196, 196, 1);
	text-overflow: ellipsis;
	font-size: 45px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 480px;
	top: 230px;
`;

const Cuenta = styled.input`
	background: rgba(196, 196, 196, 1);
	text-overflow: ellipsis;
	font-size: 35px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 479px;
	top: 500px;
`;

const SeleccionarBanco = styled.select`
	background: rgba(196, 196, 196, 1);
	text-overflow: ellipsis;
	font-size: 35px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 483px;
	top: 369px;
`;

const Polygon1 = styled.svg`
	width: 45px;
	height: 52px;
	position: absolute;
	left: 973px;
	top: 364px;
	transform: rotate(180deg);
`;

const Rectangle5Stroke = styled.svg`
	width: 644px;
	height: 526px;
	position: absolute;
	left: 433px;
	top: 191px;
`;

