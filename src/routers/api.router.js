const router = require('express').Router();
const viewsRouter = require('./views.router');
const userRouter = require('./user.router');

router.use('/', viewsRouter)
  .use('/user', userRouter);

module.exports = router;
