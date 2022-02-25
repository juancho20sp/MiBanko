const express = require('express');

const {
  loginRouter,
  userRouter,
  testRouter
} = require('./routers');

function router(app) {
  const router = express.Router();

  // VERSION 1
  app.use('/api/v1', router);

  router.use('/login', loginRouter);
  router.use('/users', userRouter)
  router.use('/test', testRouter)
}

module.exports = router;
