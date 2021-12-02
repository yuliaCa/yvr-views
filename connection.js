const mongoose = require("mongoose");

require('dotenv').config();

let mongoDB = process.env.mongoDB;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;

