const Player = require("../models/Player");

// TOP SCORERS
const getTopScorers = async (req, res) => {
    try {

        const players = await Player.find()
            .sort({ goals: -1 })
            .limit(5);

        res.json(players);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// TOP ASSISTS
const getTopAssists = async (req, res) => {
    try {

        const players = await Player.find()
            .sort({ assists: -1 })
            .limit(5);

        res.json(players);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// FASTEST PLAYERS
const getFastestPlayers = async (req, res) => {
    try {

        const players = await Player.find()
            .sort({ speed: -1 })
            .limit(5);

        res.json(players);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// BEST STAMINA
const getBestStamina = async (req, res) => {
    try {

        const players = await Player.find()
            .sort({ stamina: -1 })
            .limit(5);

        res.json(players);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    getTopScorers,
    getTopAssists,
    getFastestPlayers,
    getBestStamina
};