const jwt = require('jsonwebtoken');
require('dotenv').config();

// $
// Esto es un middleware
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const token = bearerHeader.split(' ')[1];
    req.token = token;
    next();
  } else {
    res.status(403).json({
      message: "You're not allowed to do this, contact the support team."
    });
  }

}

function verifyIsAdminToken(req, res, next) {
  const token = req.token;

  jwt.verify(token, process.env.JWT_SALT, (err, authData) => {
    if (err) {
      res.status(400).json({
        message: 'El token es inválido'
      })
    }

    // $
    console.log(authData);

    if (authData.user.role !== 'ADMIN'){
      res.status(403).json({
        message: 'El token no pertenece al rol adecuado'
      })
    }

    next();
  })
}

function verifyIsClientToken(req, res, next) {
  const token = req.token;

  jwt.verify(token, process.env.JWT_SALT, (err, authData) => {
    if (err) {
      res.status(400).json({
        message: 'El token es inválido'
      })
    }

    if (authData.role !== 'CLIENT'){
      res.status(403).json({
        message: 'El token no pertenece al rol adecuado'
      })
    }

    next();
  })
}

function verifyIsAuditorToken(req, res, next) {
  const token = req.token;

  jwt.verify(token, process.env.JWT_SALT, (err, authData) => {
    if (err) {
      res.status(400).json({
        message: 'El token es inválido'
      })
    }

    if (authData.role !== 'AUDITOR'){
      res.status(403).json({
        message: 'El token no pertenece al rol adecuado'
      })
    }

    next();
  })
}

// Verificar que sea un token de ADMIN
// Verificar que sea un token de CLIENT
// Verificar que sea un token de AUDITOR

module.exports = {
  verifyToken,
  verifyIsAdminToken,
  verifyIsClientToken,
  verifyIsAuditorToken
}
