const jwt= require("jsonwebtoken");
require('dotenv').config();

const {
    dbClient,
    Client
  } = require('../database/database');

class AccountsService{
    constructor(){}

    async createAccount(accountData) {
        // Create DB connection
        const db = new Client(dbClient);
        let result;
    
        try {
          await db.connect();
    
          const {
            acc_number,
            acc_balance,
            acc_type,
            document_number,
            document_type,
          } = accountData;
    
    
          const creationDate = new Date().toISOString().slice(0, 10);
    
          result = await db.query(`INSERT INTO DB_ACCOUNTS(ACC_NUMBER, ACC_CREATION_DATE, ACC_BALANCE, ACC_TYPE, USR_NUMDOC, USR_DOCTYPE) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`, 
            [acc_number,
            creationDate,
            acc_balance,
            acc_type.toUpperCase(),
            document_number,
            document_type.toUpperCase()]);

            //WHERE EXISTS (SELECT USR_NUMDOC, USR_DOCTYPE FROM DB_USERS WHERE (DB_USERS.USR_NUMDOC = $5 AND DB_USERS.USR_DOCTYPE = $6))
    
          result = result.rows[0];
    
        } catch(err) {
          result = {
            message: 'Something went wrong'
          }
        } finally {
          await db.end();
        }
    
        return result;
      }
}

module.exports= AccountsService;