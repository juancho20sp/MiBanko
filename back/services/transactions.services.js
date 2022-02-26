const jwt = require('jsonwebtoken');
require('dotenv').config();


const {
  dbClient,
  Client
} = require('../database/database');


class TransctionsService{
  constructor(){}

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
      const destiny_bank=1;
      const status_overdraw = null;


      check = await db.query(`SELECT acc_id FROM DB_ACCOUNTS WHERE USR_DOCTYPE=($1) AND USR_NUMDOC=($2) AND ACC_NUMBER=($3)`, [tdoc,
        ndoc,
        destiny_account
      ]);
      
      let source = await db.query(`SELECT acc_id FROM DB_ACCOUNTS WHERE ACC_NUMBER=($1)`, [source_acc
      ]);

      source=source.rows[0];
      
      if(check.rowCount>0){

        check= check.rows[0];

        if(overdraw){
          const status ="PENDIENTE";
          result=await db.query(`INSERT INTO DB_TRANSACTIONS_INTRA(tr_date, tr_destiny_bank, tr_destiny_account, tr_source_account, amount, status) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`, [creationDate,
            destiny_bank,
            check.acc_id,
            source.acc_id,
            amount,
            status
          ]);
          await db.query(`INSERT INTO db_overdraws(acc_number, ovd_creation_date, ovd_is_authorized, amount) VALUES($1, $2, $3, $4) RETURNING *`, [source_acc,
            creationDate,
            status_overdraw,
            amount_overdraw
          ]);
        }
        else{
          
          const status ="APROBADA";
          result=await db.query(`INSERT INTO DB_TRANSACTIONS_INTRA(tr_date, tr_destiny_bank, tr_destiny_account, tr_source_account, amount, estatus) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`, [creationDate,
            destiny_bank,
            check.acc_id,
            source.acc_id,
            amount,
            status
          ]);
          await db.query(`UPDATE DB_ACCOUNTS SET acc_balance=acc_balance-($1) WHERE acc_id=($2)`, [amount,
            source.acc_id
          ]);

        }
      }
    
      result = result.rows[0];

    } catch(err) {
      result = {
        message: 'Something went wrong database'
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
