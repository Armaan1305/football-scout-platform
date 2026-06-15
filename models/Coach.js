const mongoose = require("mongoose");

const coachSchema = new mongoose.Schema({
    name: String,
    country: String,
    experience: Number,
    specialization: String,
    price: Number
});

module.exports = mongoose.model("Coach", coachSchema);