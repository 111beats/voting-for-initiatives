const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('main page');
});
module.exports = router;
