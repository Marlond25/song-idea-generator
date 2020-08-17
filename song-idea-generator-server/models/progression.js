const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const progressionsSchema = new Schema({
  progression: {
    type: Array,
    required: true
  }
});

module.exports = progressions = mongoose.model('progression', progressionsSchema);
