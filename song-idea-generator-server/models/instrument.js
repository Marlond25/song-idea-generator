const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instrumentsSchema = new Schema({
  instrument: {
    type: String,
    required: true
  }
});

module.exports = instruments = mongoose.model('instrument', instrumentsSchema);
