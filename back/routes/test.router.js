const express = require('express');

// Services
const TestService = require('../services/test.services');

// Middlewares
const {
  verifyToken,
  verifyIsAdminToken,
  verifyIsClientToken,
  verifyIsAuditorToken
} = require('../middlewares/token.handler');

const router = express.Router();
const service = new TestService();


/**
 * {

 * }
 */
router.post('/admin', verifyToken, verifyIsAdminToken, (req, res) => {
  res.status(200).json({
    message: 'el token pertenece a un admin'
  })
})

router.post('/client', verifyToken, verifyIsClientToken, (req, res) => {
  res.status(200).json({
    message: 'el token pertenece a un client'
  })
})

router.post('/auditor', verifyToken, verifyIsAuditorToken, (req, res) => {
  res.status(200).json({
    message: 'el token pertenece a un auditor'
  })
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
