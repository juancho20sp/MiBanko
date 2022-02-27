//const jwt = require('jsonwebtoken');
require('dotenv').config();


const {
  dbClient,
  Client
} = require('../database/database');


class TransctionsService{
  constructor(){}

  async createTransactionIntra(transactionintraData) {
    // Create DB connection
    const db = new Client(dbClient);
    let result;

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
      } = transactionintraData;
      const creationDate = new Date().toISOString().slice(0, 10);
      const destiny_bank=1;

      let destiny = await db.query(`SELECT acc_id FROM DB_ACCOUNTS WHERE USR_DOCTYPE=($1) AND USR_NUMDOC=($2) AND ACC_NUMBER=($3)`, [tdoc,
        ndoc,
        destiny_account
      ]);

      let source = await db.query(`SELECT acc_id FROM DB_ACCOUNTS WHERE ACC_NUMBER=($1)`, [source_acc
      ]);

      source=source.rows[0];

      if(destiny.rowCount>0){

        destiny= destiny.rows[0];

        if(overdraw){

          console.log("sssss")
          const status ="PENDIENTE";
          const tasaction_type ="INTRA";
          const status_overdraw = null;
          result=await db.query(`INSERT INTO DB_TRANSACTIONS_INTRA(tr_date, tr_destiny_bank, tr_destiny_account, tr_source_account, amount, estatus) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`, [creationDate,
            destiny_bank,
            destiny.acc_id,
            source.acc_id,
            amount,
            status
          ]);
          result=result.rows[0];
          await db.query(`INSERT INTO db_overdraws(ovd_creation_date, ovd_is_authorized, amount, tr_type, tr_id) VALUES($1, $2, $3, $4, $5) RETURNING *`, [
            creationDate,
            status_overdraw,
            amount_overdraw,
            tasaction_type,
            result.tr_id
          ]);
        }
        else{

          const status ="APROBADA";
          result=await db.query(`INSERT INTO DB_TRANSACTIONS_INTRA(tr_date, tr_destiny_bank, tr_destiny_account, tr_source_account, amount, estatus) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`, [creationDate,
            destiny_bank,
            destiny.acc_id,
            source.acc_id,
            amount,
            status
          ]);

          await db.query(`UPDATE DB_ACCOUNTS SET acc_balance=acc_balance-($1) WHERE acc_id=($2)`, [amount,
            source.acc_id
          ]);
          await db.query(`UPDATE DB_ACCOUNTS SET acc_balance=acc_balance+($1) WHERE acc_id=($2)`, [amount,
            destiny.acc_id
          ]);
          result = result.rows[0];
        }
      }

    } catch(err) {
      console.log(err)
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

  /*async getTransactionsDetail() {
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
  }*/

}

module.exports = TransctionsService;
