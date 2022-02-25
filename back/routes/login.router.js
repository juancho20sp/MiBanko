const express = require('express');

// Services
const LoginService = require('../services/login.services');

const router = express.Router();
const service = new LoginService();


/**
 * {
 *    email: String
 *    password: String
 * }
 */
router.post('/', async (req, res) => {
  try {
    // SIMULAR RESPUESTA DE LA BD
    // TODO -> del request tomar el document_number y el document_type y con eso, consultar a traves del servicio de usuarios si ese usuario existe y nos traemos sus datos
    //    NOTA: Esto debe escalarse para hacer un JOIN con
    //    la tabla login
    const user = {
      // TODO lo del LOGIN (menos la contraseña)
      // DB_USER (name, lastname, role)
      document_number: 123456,
      document_type: 'CC',
      user_name: 'juancho20sp',
      email: 'juan@email.com',
      user_lastname: 'Murillo',
      role: 'ADMIN' // TODO -> cuadrar en el back guardarlo en mayúscula
    }


    const userToken = await service.createToken(user);

    res.status(200).json(userToken);
  } catch(err) {
    res.status(500).json({
      message: 'Something went wrong on the server'
    })
  }
})

/**
 * {
 *    token
 * }
 */
router.post('/refreshToken', async (req, res) => {
  const token = req.body.token;

  try {
    const newToken = await service.refreshToken(token);

    res.status(200).json(newToken);

  } catch(errMsg) {
    res.status(403).json(errMsg)
  }
})



module.exports = router;
