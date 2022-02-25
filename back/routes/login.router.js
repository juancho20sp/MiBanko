const express = require('express');

// Services
const LoginService = require('../services/login.services');

// TODO -> importar los servicios

const router = express.Router();
const service = new LoginService();

// /api/v1/login/create
// /api/v1/login/logout

/**
 * {
 *    email: String
 *    password: String
 * }
 */
router.post('/', async (req, res) => {
  // Esto es un llamado a la BD
  // TODO -> llamar al servicio con los datos el usuario
  // TODO -> verificar si existe

  // SIMULAR RESPUESTA DE LA BD
  const user = {
    // TODO lo del LOGIN (menos la contraseña)
    // DB_USER (name, lastname, role)
    documentNumber: 123456,
    documentType: 'CC',
    username: 'juancho20sp',
    email: 'juan@email.com',
    name: 'Juan David',
    lastname: 'Murillo',
    role: 'ADMIN' // TODO -> cuadrar en el back guardarlo en mayúscula
  }


  const userToken = await service.createToken(user);

  res.status(200).json(userToken);
})

/**
 * {
 *    token
 * }
 */
router.post('/refreshToken', async (req, res) => {
  const token = req.body.token;

  // $
  console.log(token)

  try {
    const newToken = await service.refreshToken(token);

    res.status(200).json(newToken);

  } catch(errMsg) {
    res.status(403).json(errMsg)
  }
})



module.exports = router;
