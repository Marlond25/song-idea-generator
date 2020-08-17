const express = require('express');
const router = express.Router();

const instrument = require('../../models/instrument');

// @route GET api/instruments
// @desc Get all instruments
// @access Public
router.get('/', (req, res, next) => {
  instrument.find()
  .then(items => res.json(items));
});

module.exports = router;
