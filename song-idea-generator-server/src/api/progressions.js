const express = require('express');
const router = express.Router();

const progression = require('../../models/progression');

// @route GET api/progressions
// @desc Get all progressions
// @access Public
router.get('/', (req, res, next) => {
  progression.find()
  .then(items => res.json(items));
});

module.exports = router;
