const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    position: String,

    height: Number,
    weight: Number,

    preferredFoot: String,

    club: String,

    country: String,

    goals: Number,

    assists: Number,

    speed: Number,

    stamina: Number
});

module.exports = mongoose.model("Player", playerSchema);