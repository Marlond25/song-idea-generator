const express = require('express');
const router = express.Router();

const bpm = require('../../models/bpm');

// @route GET api/bpms
// @desc Get all bpms
// @access Public
router.get('/', (req, res, next) => {
  bpm.find()
  .then(items => res.json(items));
});

module.exports = router;
