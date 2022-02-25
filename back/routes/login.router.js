const express = require('express');
const jwt = require('jsonwebtoken');

// TODO -> importar los servicios

const router = express.Router();
// TODO -> create service

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

  // Create and sign the token
  // TODO -> agregar la sal a .env
  // TODO -> agregar tiempo del token al .env
  jwt.sign({ user }, 'mySalt', { expiresIn: '60s' }, (err, token) => {
    res.status(200).json({
      user: {
        ...user,
        token
      }
    });
  })

})

// TODO -> CREAR OTRA RUTA DEL LOGIN QUE REGENERE EL TOKEN
// RECIBE EL TOKEN ANTERIOR
// RETORNA UNO NUEVO
/**
 * {
 *    email: String
 *    password: String
 * }
 */
router.get('/', (req, res) => {
  const user = req.body.user;
  console.log(user);
  // Create and sign the token
  // TODO -> agregar la sal a .env
  // TODO -> agregar tiempo del token al .env
  jwt.sign({ user }, 'mySalt', { expiresIn: '60s' }, (err, token) => {
    res.status(200).json({
      user: {
        ...user,
        token:token
      }
    });
  })

})



module.exports = router;
