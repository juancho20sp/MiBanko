const express = require('express');

const TransctionsService = require('../services/transactions.services');

const router = express.Router();
const service = new TransctionsService();

/**
 * transactionIntra:{
 *  destiny_account: Integer
 *  source_acc: Integer
 *  amount: Integer
 *  typeDocument: String
 *  numDoc: Integer
 *  overdraw: Bool
 *  amount_overdraw: Integer
 * }
 */

router.post('/createTransactionIntra', async (req, res) => {
  try {
    const data = req.body.transactionIntra;

    const transactionintraData = await service.createTransactionIntra(data);

    res.status(200).json(transactionintraData);
  } catch(err) {
    res.status(500).json({
      message: 'Something went wrong on the server'
    })
  }
})



/**
 * transactionInter:{
 *  tr_destiny_bank: Integer
 *  tr_destiny_acc: Integer
 *  tr_source_acc: Integer
 *  tr_destiny_receiver_name: String
 *  tr_destiny_receiver_lastName: String
 *  tr_destiny_receiver_typeDoc: String
 *  tr_destiny_receiver_docNum: Integer
 *  amount: Integer
 *  overdraw: Bool
 *  amount_overdraw: Integer
 * }
 */
 router.post('/createTransactionInter', async (req, res) => {
  try {
    const data = req.body.transactionInter;

    const transactionInterData = await service.createTransactionInter(data);

    res.status(200).json(transactionInterData);
  } catch(err) {
    res.status(500).json({
      message: 'Something went wrong on the server'
    })
  }
});


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

router.get('/getTransactionsUsuario', async(req, res) => {
  try {
    const data = req.body.getData;
    const result = await service.getTransactionsUsuario(data);
    res.status(200).json(result);
  } catch(err) {
    res.status(500).json({
      message: 'Something went wrong on the server'
    })
  }
})

router.get('/getOverdraws', async(req, res) => {
  try {
    const result = await service.getOverdraws();
    res.status(200).json(result);
  } catch(err) {
    res.status(500).json({
      message: 'Something went wrong on the server'
    })
  }
})

router.put('/setOverdraws', async(req, res) => {
  try {
    const data = req.body.setOverdraw;
    const result = await service.setOverdraws(data);
    res.status(200).json(result);
  } catch(err) {
    res.status(500).json({
      message: 'Something went wrong on the server'
    })
  }
})

module.exports = router;
