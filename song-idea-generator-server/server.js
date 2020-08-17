require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const instruments = require('./src/api/instruments');
const bpms = require('./src/api/bpms');
const progressions = require('./src/api/progressions');

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {console.log('mongodb connected...')})
  .catch((error) => {console.log(error)});

app.use('/api/instruments', instruments);
app.use('/api/bpms', bpms);
app.use('/api/progressions', progressions);

const port = process.env.PORT || 6969;

app.listen(port, () => {console.log(`Listening on http://localhost:${port}`)});
