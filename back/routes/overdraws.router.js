const express = require('express');

const OverdrawsService = require('../services/overdraws.services');

const router = express.Router();
const service = new OverdrawsService();

router.post('/createOverdraw', async (req, res) => {
  try {
    const data = req.body.overdraw;
    const overdrawData = await service.createOverdraw(data);

    res.status(200).json(overdrawData);
  } catch(err) {
    res.status(500).json({
      message: 'Something went wrong on the server'
    })
  }
})

router.get('/manageOverdraw', async(req, res) => {
  try {
    const overdrawData = await service.manageOverdraw(data);
    res.status(200).json(overdrawData);
  } catch(err) {
    res.status(500).json({
      message: 'Something went wrong on the server'
    })
  }
})
