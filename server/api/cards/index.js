const router = require('express').Router();

router.get('/cards/time', () => {
  return Date.now();
});

module.exports = router;
