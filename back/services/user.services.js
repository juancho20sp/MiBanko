const jwt = require('jsonwebtoken');
require('dotenv').config();

const {
  dbClient,
  Client
} = require('../database/database');

class UserService {
  constructor() { }


  async createUser(userData) {
    // Create DB connection
    const db = new Client(dbClient);
    let result;

    try {
      await db.connect();

      const {
        document_number,
        document_type,
        user_name,
        user_lastname,
        role,
      } = userData;

      // $
      console.log(' -----  ')
      console.log(document_number,
        document_type,
        user_name,
        user_lastname,
        role
        )

      const creationDate = new Date().toISOString().slice(0, 10);

      result = await db.query(`INSERT INTO DB_USERS(USR_NUMDOC, USR_DOCTYPE, USR_NAME, USR_LASTNAME, USR_ROLE, USR_BIRTHDATE, USR_CREATION_DATE) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [document_number,
        document_type,
        user_name,
        user_lastname,
        role,
        creationDate,
        creationDate]);



      result = result.rows[0];

    } catch(err) {
      // $
      console.log(err)

      result = {
        message: 'Something went wrong'
      }
    } finally {
      await db.end();
    }

    return result;
  }

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
    return new Promise((res, rej) => {
      jwt.verify(token, process.env.JWT_SALT, (err, authData) => {
        if (err) {
          rej({
            message: 'El token es inválido'
          })
        }

        const newToken = this.createToken(authData.user);

        newToken.then(response => {
          res({
            ...response
          })
        })
      })
    })

  }
}

module.exports = UserService;
