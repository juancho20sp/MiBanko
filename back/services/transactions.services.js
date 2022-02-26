const jwt = require('jsonwebtoken');
require('dotenv').config();


const {
  dbClient,
  Client
} = require('../database/database');


class TransctionsService{

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
