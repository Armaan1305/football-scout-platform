const mongoose = require("mongoose");

const trialSchema = new mongoose.Schema({
    academy: String,
    location: String,
    date: String,
    requirements: String
});

module.exports = mongoose.model("Trial", trialSchema);