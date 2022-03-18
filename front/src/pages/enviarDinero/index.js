import { React, useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


const EnviarDinero = ({isOverdraw}) => {
	let history = useNavigate();
	const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
	const [ balance, setBalance] = useState("Cargando..");
	const [banks, setBanks] = useState([" "]);
	const [userAccount, setUserAccount] = useState([" "]);
	const [selectedBx, setBx] = useState('');
	const [amountOverdraw, setAmmountOverdraw] = useState(0);


	useEffect(() => {
		let location = 'api/v1/banks';
		axios.get(window.$dir + location + `/`)
			.then((response) => {
				let banksArray = [];
				for (let i = 0; i < Object.keys(response.data).length; i++) {
					banksArray.push(response.data[i]);
				}
				setBanks(banksArray);
			})
		location = 'api/v1/users';
		let body={
			usr_doctype: currentUser.usr_doctype,
			usr_numdoc: currentUser.usr_numdoc
		}
		axios.post(window.$dir+location+`/getUserBalance`,body)
			.then((response) => {
				if(response.data && response.data.acc_balance){
					setBalance(response.data.acc_balance)
				}
			})
	}, [])

	useEffect(() => {
		let location = 'api/v1/banks';
		axios.get(window.$dir + location + `/`)
			.then((response) => {
				let banksArray = [];
				for (let i = 0; i < Object.keys(response.data).length; i++) {
					banksArray.push(response.data[i]);
				}
				setBanks(banksArray);
			})
	}, [userAccount])
	function handleSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		if (isOverdraw){
			setAmmountOverdraw((data.get('cantidad'))-balance);
		}
		let location = 'api/v1/accounts';
		let body = {
			account: {
				document_number: currentUser.usr_numdoc,
				document_type: currentUser.usr_doctype,
				acc_type: selectedBx
			}
		}
		axios.post(window.$dir + location + `/getAccount`, body)
			.then((response) => {
				if(response.data ){

					return response.data;
				}
			}
		).then(
			res =>{
				if (data.get('banco') == 1 ){
					let body = {
						transactionIntra: {
							destiny_account: data.get('cuenta'),
							source_acc: res[0].acc_number,
							amount: Number(data.get('cantidad')),
							tdoc: currentUser.usr_doctype,
							ndoc: Number(currentUser.usr_numdoc),
							overdraw: isOverdraw,
							amount_overdraw: amountOverdraw
						}
					}
					axios.post(window.$dir + `api/v1/transactions/createTransactionIntra`, body)
						.then((response) => {
							if (response.status === 200) {
								Swal.fire(
									'Dinero enviado correctamente',
									'success'
								);
								history('/home');
								event.target.reset();
							} else {
								Swal.fire("Something is Wrong :(!", "try again later", "error");
							}
		
							})
			} if (data.get('banco') != 1) {
				body = {
					transactionInter:{
						tr_destiny_bank: Number(data.get('banco')),
						tr_destiny_acc: Number(data.get('cuenta')),
						tr_source_acc: res[0].acc_number,
						tr_destiny_receiver_name: "OtroUsuario",
						tr_destiny_receiver_lastName: "OtroUsuario",
						tr_destiny_receiver_typeDoc: "OtroUsuario" ,
						tr_destiny_receiver_docNum: 0,
						amount: Number(data.get('cantidad')),
						overdraw: isOverdraw,
						amount_overdraw: amountOverdraw
						}
				}
				axios.post(window.$dir + `api/v1/transactions/createTransactionInter`, body)
					.then((response) => {
						if (response.status === 200) {
							Swal.fire(
								'Dinero enviado correctamente',
								'success'
							);
						history('/home');
						event.target.reset();
						} else {
							Swal.fire("Something is Wrong :(!", "try again later", "error");
						}
					})
				}
			}
		)
		//event.target.reset(); <- Limpiar formulario
	}

	return (
		<div className='form-content'>
			<form onSubmit={handleSubmit} className='form' noValidate>
				<RootWrapperEnviarDinero>
					<Rectangle5Stroke xmlns="http://www.w3.org/2000/svg">
						<path fill="rgba(0, 0, 0, 1)" d="M656.944 0.821875L21.0559 0.821875C10.0085 0.821875 1.0528 7.81323 1.0528 16.4375L1.0528 509.562C1.0528 518.187 10.0085 525.178 21.0559 525.178L656.944 525.178C667.992 525.178 676.947 518.187 676.947 509.562L676.947 16.4375C676.947 7.81323 667.992 0.821875 656.944 0.821875ZM21.0559 0C9.42705 0 0 7.35932 0 16.4375L0 509.562C0 518.641 9.42707 526 21.0559 526L656.944 526C668.573 526 678 518.641 678 509.562L678 16.4375C678 7.35932 668.573 0 656.944 0L21.0559 0Z" />
					</Rectangle5Stroke>
					<Rectangle5 xmlns="http://www.w3.org/2000/svg">
						<path fill="rgba(196, 196, 196, 0.3)" d="M0 16.4375C0 7.35932 9.42705 0 21.0559 0L656.944 0C668.573 0 678 7.35932 678 16.4375L678 509.562C678 518.641 668.573 526 656.944 526L21.0559 526C9.42707 526 0 518.641 0 509.562L0 16.4375Z" />
					</Rectangle5>
					<Polygon1 xmlns="http://www.w3.org/2000/svg">
						<path fill="rgba(196, 196, 196, 1)" d="M22.5 0L41.9856 39L3.01443 39L22.5 0Z" />
					</Polygon1>
					<EnviarDineroStr>
						Enviar Dinero
					</EnviarDineroStr>
					<Rectangle3 />
					<EnviarDinero_0001 > Enviar Dinero </EnviarDinero_0001 >
					<Rectangle6 />
					<Rectangle10 />
					<Rectangle8 />
					<Cantidad type="number" name="cantidad" placeholder="$" />
					<Cuenta name="cuenta" placeholder="Cuenta : " type="number" />
					<SeleccionarBanco name="banco" >
						<option value="" hidden>seleccione un Banco</option>
						{banks.map((element, index) => {
							return (
								<option key={index} value={element.bnk_id}>{element.bnk_name}</option>
							);
						})}
					</SeleccionarBanco>
					<Group4>
						<Group1>
							<RadioAhorros name="Ahorros" type="radio" checked={"AHORROS" === selectedBx}
								onChange={() => { setBx("AHORROS") }} />
							<Ahorros>
								Ahorros
							</Ahorros>
						</Group1>
						<Group2>
							<RadioCorriente name="Corriente" type="radio" checked={"CORRIENTE" === selectedBx}
								onChange={() => { setBx("CORRIENTE") }} />
							<Corriente >
								Corriente
							</Corriente>
						</Group2>
					</Group4>
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
	width: 678px;
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
	width: 236px;
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
	font-size: 35px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 480px;
	top: 230px;
	max-width:200px;
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
	width:500px;
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
	width:500px;
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
	width: 678px;
	height: 526px;
	position: absolute;
	left: 433px;
	top: 191px;
`;

const Group4 = styled.div`
	width: 380px;
	height: 82px;
	position: absolute;
	left: 726px;
	top: 233px;
`;

const Group1 = styled.div`
	width: 182px;
	height: 82px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const RadioAhorros = styled.input`
	width: 36px;
	height: 39px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 19px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Ahorros = styled.span`
	color: rgba(0, 0, 0, 1);
	text-overflow: ellipsis;
	font-size: 30px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 41px;
	top: 5px;
`;

const Group2 = styled.div`
	width: 198px;
	height: 48px;
	position: absolute;
	left: 182px;
	top: 0px;
`;

const RadioCorriente = styled.input`
	width: 36px;
	height: 39px;
	background-color: rgba(196, 196, 196, 1);
	border-radius: 19px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Corriente = styled.span`
	color: rgba(0, 0, 0, 1);
	text-overflow: ellipsis;
	font-size: 30px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 46px;
	top: 5px;
`;

