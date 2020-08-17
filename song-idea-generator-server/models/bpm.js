const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bpmsSchema = new Schema({
  bpm: {
    type: String,
    required: true
  }
});

module.exports = bpms = mongoose.model('bpm', bpmsSchema);
