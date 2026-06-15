const express = require("express");

const router = express.Router();

const {
    createTrial,
    getTrials
} = require("../controllers/trialController");

router.post("/", createTrial);

router.get("/", getTrials);

module.exports = router;