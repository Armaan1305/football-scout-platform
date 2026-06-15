const express = require("express");

const router = express.Router();

const {
    createCoach,
    getCoaches
} = require("../controllers/coachController");

router.post("/", createCoach);

router.get("/", getCoaches);

module.exports = router;