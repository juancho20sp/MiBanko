const express = require('express');

//Services
const AccountsService= require('../services/accounts.services');

const router= express.Router();
const service= new AccountsService();


/**
 * account: {
 *    acc_number: Integer
 *    acc_balance: Integer
 *    acc_type: String
 *    document_number: Integer
 *    document_type: String
 * }
 */
 router.post('/createAccount', async (req, res) => {
    try {
      const data = req.body.account;
  
  
      const accountData = await service.createAccount(data);
  
      res.status(200).json(accountData);
    } catch(err) {
      res.status(500).json({
        message: 'Something went wrong on the server'
      })
    }
  })

module.exports= router;