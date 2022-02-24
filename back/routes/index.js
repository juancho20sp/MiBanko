const express = require('express');

const {
  loginRouter
} = require('./routers');

function router(app) {
  const router = express.Router();

  // VERSION 1
  app.use('/api/v1', router);

  router.use('/login', loginRouter);
}

module.exports = router;
