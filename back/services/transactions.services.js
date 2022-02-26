const jwt = require('jsonwebtoken');
require('dotenv').config();


const {
  dbClient,
  Client
} = require('../database/database');


class TransctionsService{

  async createTransactionInter(transactioninterData) {
    // Create DB connection
    const db = new Client(dbClient);
    let result;
    let check;

    try {
      await db.connect();

      const {
        destiny_account,
        source_acc,
        amount,
        tdoc,
        ndoc,
        overdraw,
        amount_overdraw
      } = transactioninterData;


      const creationDate = new Date().toISOString().slice(0, 10);
      status_overdraw = null;
      check = await db.query(`SELECT COUNT(*) FROM db_transactions WHERE USR_DOCTYPE=$1 AND USR_NUMDOC=$2 AND ACC_NUMBER=$3 RETURNING *`, [tdoc,
        ndoc,
        destiny_account
      ])

      check= check.rows[0];
      console.log(check);
      if(check==1){
        
        if(overdraw){
          const status ="PENDIENTE";
          await db.query(`INSERT INTO DB_TRANSACTIONS_INTRA(acc_number, ovd_creation_date, ovd_is_authorized, amount) VALUES($1, $2, $3, $4) RETURNING *`, [applicant_account,
            creationDate,
            status_overdraw,
            amount
          ]);
          await db.query(`INSERT INTO db_overdraws(acc_number, ovd_creation_date, ovd_is_authorized, amount) VALUES($1, $2, $3, $4) RETURNING *`, [applicant_account,
            creationDate,
            status_overdraw,
            amount
          ]);
        }
      }
      

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

  async getTransactionsInfo() {
    // Create DB connection
    const db = new Client(dbClient);
    let numTransactions = 0;
    let valueTransactions = 0;
    try {
      await db.connect();

      numTransactions = await db.query(`SELECT COUNT(*) FROM db_transactions;`);
      numTransactions = numTransactions.rows;
      valueTransactions = await db.query(`SELECT SUM(amount) FROM db_transactions;;`);
      valueTransactions = valueTransactions.rows;

    } catch(err) {
        return{
          message: 'Something went wrong'
        };
    } finally {
      await db.end();
    }

    return {
      NumTransactions: {numTransactions},
      ValueTransactions: {valueTransactions}
    };
  }

  async getTransactionsDetail() {
    // Create DB connection
    const db = new Client(dbClient);
    let result;

    try {
      await db.connect();

      result = await db.query(`SELECT COUNT(*) FROM db_transactions;`);


    } catch(err) {
        return{
          message: 'Something went wrong'
        };
    } finally {
      await db.end();
    }

    return {
      NumTransactions: {numTransactions},
      ValueTransactions: {valueTransactions}
    };
  }

}

module.exports = TransctionsService;
