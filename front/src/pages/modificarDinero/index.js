import { React, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function ModificarDinero() {
	const [currentUserAdmin,setCurrentUserAdmin] = useState(JSON.parse(localStorage.getItem('user')));

  let history = useNavigate();
  const [users, setUsers] = useState([" "]);
  const [currentUser, setCurrentUser] = useState();
  const [currentUserBalance, setCurrentUserBalance] = useState(0);
  const [selectedBx, setBx] = useState("");
  useEffect(() => {
    let location = "api/v1/users";
    axios.get(window.$dir + location + `/getAllUsers`).then((response) => {
      let usersArray = [];
      for (let i = 1; i < Object.keys(response.data).length; i++) {
        usersArray.push(response.data[i]);
      }
      setUsers(usersArray);
    });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
	let source = 1
	let destiny = 1;
	if (selectedBx === "retirar" ) {
		source = currentUser?.acc_number
		destiny = 1
	} else {
		source = 1
	 	destiny = currentUser?.acc_number;
	}
    const data = new FormData(event.currentTarget);
    let location = "api/v1/accounts";
    let body = {
      transactionIntra: {
        destiny_account: destiny,
        source_acc:  source,
        amount: Number(data.get("valor")),
        tdoc: currentUser?.usr_doctype,
        ndoc: Number(currentUser?.usr_numdoc),
        overdraw: false,
        amount_overdraw: 0
      },
    };
    axios
      .post(window.$dir + `api/v1/transactions/createTransactionIntra`, body)
      .then((response) => {
        if (response.status === 200) {
          Swal.fire("Dinero transferido correctamente", "success");
          history("/home");
          event.target.reset();
        } else {
          Swal.fire("Something is Wrong :(!", "try again later", "error");
        }
      });
  };
  const handleCurrentUser = (e) => {
    let usrData = e.target.value.split(" ");
    setCurrentUser(users[e.target.value]);
	setCurrentUserBalance("Cargando...");
    let body = {
      usr_doctype: users[e.target.value].usr_doctype,
      usr_numdoc: users[e.target.value].usr_numdoc,
    };
    let location = "api/v1/users";
    axios
      .post(window.$dir + location + `/getUserBalance`, body)
      .then((response) => {
		setCurrentUserBalance(0);
        if (response.data && response.data.acc_balance) {
          setCurrentUserBalance(response.data.acc_balance);
        }
      });
  };
  return (
    <div className="form-content">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <RootWrapperModificarDinero>
          <ModificarDineroDeUsuario>
            Modificar dinero de usuario
          </ModificarDineroDeUsuario>
          <Rectangle11 />
          <Rectangle12 />
          <Rectangle10 xmlns="http://www.w3.org/2000/svg">
            <path
              fill="rgba(196, 196, 196, 0.3)"
              d="M0 18.8125C0 8.42264 9.78856 0 21.8634 0L682.137 0C694.211 0 704 8.42264 704 18.8125L704 583.188C704 593.577 694.211 602 682.137 602L21.8634 602C9.78858 602 0 593.577 0 583.188L0 18.8125Z"
            />
          </Rectangle10>
          <NombreDeUsuario
            name="nombreUsuario"
            onChange={(e) => handleCurrentUser(e)}
          >
            <option value="" hidden>
              seleccione un Usuario
            </option>
            {users.map((element, index) => {
              return (
                <option key={index} value={index}>
                  {element.usr_name + element.usr_lastname}
                </option>
              );
            })}
          </NombreDeUsuario>
          <Ellipse1 />
          <Line1 />
          <DineroDelUsuario>
            Dinero del usuario: {currentUserBalance}
          </DineroDelUsuario>
          <Group3>
            <Group1>
              <RadioConsignar
                name="consignar"
                type="radio"
                checked={"consignar" === selectedBx}
                onChange={() => {
                  setBx("consignar");
                }}
              />
              <Consignar>Consignar</Consignar>
            </Group1>
            <Group2>
              <RadioRetirar
                name="retirar"
                type="radio"
                checked={"retirar" === selectedBx}
                onChange={() => {
                  setBx("retirar");
                }}
              />
              <Retirar>Retirar</Retirar>
            </Group2>
          </Group3>
          <Rectangle6 />
          <Rectangle13 />
          <ValorLabel>Valor</ValorLabel>
          <Valor name="valor" type="number" />
          <RealizarTransacción>Realizar transacción</RealizarTransacción>
        </RootWrapperModificarDinero>
      </form>
    </div>
  );
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

const NombreDeUsuario = styled.select`
  background: rgba(196, 196, 196, 1);
  text-overflow: ellipsis;
  font-size: 35px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 494px;
  top: 196px;
  width: 490px;
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

const DineroDelUsuario = styled.span`
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

const RadioConsignar = styled.input`
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

const RadioRetirar = styled.input`
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

const Valor = styled.input`
  background: rgba(196, 196, 196, 1);
  text-overflow: ellipsis;
  font-size: 45px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 491px;
  top: 539px;
`;

const ValorLabel = styled.span`
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

const RealizarTransacción = styled.button`
  background-color: rgba(113, 107, 107, 1);
  text-overflow: ellipsis;
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 585px;
  top: 660px;
`;
