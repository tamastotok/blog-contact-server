const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const statusRoute = require('./routes/status');
const submitRoute = require('./routes/submit');

const PORT = process.env.PORT || 8000;

const options = {
  origin: process.env.ORIGIN,
};

dotenv.config();

app.use(cors(options));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/status', statusRoute);
app.use('/submit', submitRoute);

//  Connect to server
app.listen(PORT, () => console.log('Server running at port: ', PORT));
