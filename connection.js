const mongoose = require("mongoose");

let mongoDB = `mongodb+srv://yulia2021:YuliaAtYVR2022@cluster0.g64se.mongodb.net/YVR-Places?retryWrites=true&w=majority`

module.exports = mongoose.connect(mongoDB);