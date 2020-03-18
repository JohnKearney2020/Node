const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.rende('index.ejs');
});

module.exports = router;
