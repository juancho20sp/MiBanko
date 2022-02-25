const jwt = require('jsonwebtoken');
require('dotenv').config();

const {
  dbClient,
  Client
} = require('../database/database');

class LoginService {
  constructor() { }

  // Create and sign the token
  createToken(user) {
    return new Promise((resolve, reject) => {
      jwt.sign(
        { user },
        process.env.JWT_SALT,
        { expiresIn: process.env.JWT_TIME },
        (err, token) => {
            if (err){
                reject(err)
                return
            }

            resolve({
              user: {
                ...user,
                token
              }
            });
        })
    })
  }

  // Refresh the user token
  refreshToken(token) {
    jwt.verify(token, process.env.JWT_SALT, (err, authData) => {
      if (err) {
        return {
          message: 'El token es inválido'
        }
      }

      return {
        ...authData
      }
    })
  }
}

module.exports = LoginService;
