const router = require('express').Router();

router.get('/time', (req, res) => {
  res.status(200).json({
    time: Date.now()
  });
});

module.exports = router;
