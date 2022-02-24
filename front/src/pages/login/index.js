import React from 'react';
import {
    RootWrapperLogin,MiBanko,
    Rectangle1,Rectangle2,Rectangle3,Rectangle4,Rectangle5,
    ContraseñaInput,
    CrearCuentaBtn,
    IngresarBtn,
    UsuarioInput
} from './LoginElements.js';
const Login = () => {
    return (
        <RootWrapperLogin>
            <Rectangle5 />
                <MiBanko>
                    MiBanko
                </MiBanko>
            <Rectangle1 />
            <Rectangle2 />
                <UsuarioInput  placeholder="Usuario"/>
                <ContraseñaInput  placeholder="Contraseña" type="password"/>
            <Rectangle3 />
            <Rectangle4 />
            <CrearCuentaBtn  to={'/crearCuenta'}>
                Crear cuenta
            </CrearCuentaBtn>
            <IngresarBtn to={'/homeUsuario'}>
                Ingresar
            </IngresarBtn>
        </RootWrapperLogin>
    )
}

export default Login