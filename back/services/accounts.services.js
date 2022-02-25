const jwt= require("jsonwebtoken");
require('dotenv').config();

const {
    dbClient,
    Client,
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
      
      
    async getAccount(accountData){
        const db= new Client(dbClient);
        let result;

        try{
            await db.connect();

            const{
                document_number,
                document_type
            }= accountData;

            result= await db.query(`SELECT * FROM DB_ACCOUNTS WHERE (DB_ACCOUNTS.USR_NUMDOC = $1 AND DB_ACCOUNTS.USR_DOCTYPE = $2)`, [document_number,document_type.toUpperCase()]);

            result= result.rows;

        }catch(err){
            result = {
                message: 'Something went wrong database'
            }
        }finally{
            await db.end();
        }

        return result;
    }

    async getAllAccounts(){
        const db= new Client(dbClient);
        let result;
        try{
            await db.connect();

          result= await db.query(`SELECT * FROM DB_ACCOUNTS`);

          result= result.rows;

        }catch(err){
            result = {
              message: 'Something went wrong'
            }
        }finally{
          await db.end();
        }

        return result;
    }
}

module.exports= AccountsService;