const express = require('express');

// Services
const UserService = require('../services/user.services');

const router = express.Router();
const service = new UserService();


/**
 * user: {
 *    document_number: Integer
 *    document_type: String
 *    user_name: String
 *    user_lastname: String
 *    role: String
 * }
 */
router.post('/createUser', async (req, res) => {
  try {
    const data = req.body.user;


    const userData = await service.createUser(data);

    res.status(200).json(userData);
  } catch(err) {
    res.status(500).json({
      message: 'Something went wrong on the server'
    })
  }
})


// TODO -> /createUserLogin
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
