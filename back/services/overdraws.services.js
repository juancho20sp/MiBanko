const jwt = require('jsonwebtoken');
require('dotenv').config();


const {
  dbClient,
  Client
} = require('../database/database');


class OverdrawsService{

  async createOverdraw(overdrawData) {
    // Create DB connection
    const db = new Client(dbClient);
    let result;

    try {
      await db.connect();

      const {
        applicant_account,
        amount,
      } = overdrawData;


      const creationDate = new Date().toISOString().slice(0, 10);
      const status = null;

      result = await db.query(`INSERT INTO db_overdraws(acc_number, ovd_creation_date, ovd_is_authorized, amount) VALUES($1, $2, $3, $4) RETURNING *`, [applicant_account,
        creationDate,
        status,
        amount
      ]);

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

  async manageOverdraw(overdrawData) {
    // Create DB connection
    const db = new Client(dbClient);
    let result;

    try {
      await db.connect();

      const {
        status
      } = overdrawData;


      result = await db.query(`UPDATE db_overdraws SET ovd_is_authorized = $1 RETURNING *`, [status
      ]);

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
