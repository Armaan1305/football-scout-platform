const express = require("express");

const router = express.Router();

const {
    getTopScorers,
    getTopAssists,
    getFastestPlayers,
    getBestStamina,
    getDashboardStats
} = require("../controllers/dashboardController");

router.get("/stats", getDashboardStats);

router.get("/top-scorers", getTopScorers);

router.get("/top-assists", getTopAssists);

router.get("/fastest-players", getFastestPlayers);

router.get("/best-stamina", getBestStamina);

module.exports = router;