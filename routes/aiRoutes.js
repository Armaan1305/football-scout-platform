const express = require("express");

const router = express.Router();

const {
    generateScoutReport
} = require("../controllers/aiController");

router.post("/scout-report", generateScoutReport);

module.exports = router;