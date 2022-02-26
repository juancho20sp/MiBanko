const express = require('express');

const TransctionsService = require('../services/transactions.services');

const router = express.Router();
const service = new TransctionsService();


router.post('/createTransactionInter', async (req, res) => {
  try {
    const data = req.body.transactioninter;
    const transactioninterData = await service.createTransactionInter(data);

    res.status(200).json(transactioninterData);
  } catch(err) {
    res.status(500).json({
      message: 'Something went wrong on the server'
    })
  }
})


router.get('/getTransactionsInfo', async(req, res) => {
  try {
    const result = await service.getTransactionsInfo();
    res.status(200).json(result);
  } catch(err) {
    res.status(500).json({
      message: 'Something went wrong on the server'
    })
  }
})

router.get('/getTransactionsDetail', async(req, res) => {
  try {
    const result = await service.getTransactionsDetail();
    res.status(200).json(result);
  } catch(err) {
    res.status(500).json({
      message: 'Something went wrong on the server'
    })
  }
})
