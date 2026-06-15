const Player = require("../models/Player");

// CREATE PLAYER
const createPlayer = async (req, res) => {
    try {

        const player = new Player(req.body);

        await player.save();

        res.status(201).json(player);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET ALL PLAYERS + FILTERS
const getPlayers = async (req, res) => {
    try {

        const query = {};

        if (req.query.position) {
            query.position = req.query.position;
        }

        if (req.query.club) {
            query.club = req.query.club;
        }

        if (req.query.minGoals) {
            query.goals = {
                $gte: Number(req.query.minGoals)
            };
        }

        const players = await Player.find(query);

        res.json(players);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET PLAYER BY ID
const getPlayerById = async (req, res) => {
    try {

        const player = await Player.findById(req.params.id);

        res.json(player);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// UPDATE PLAYER
const updatePlayer = async (req, res) => {
    try {

        const player = await Player.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(player);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// DELETE PLAYER
const deletePlayer = async (req, res) => {
    try {

        await Player.findByIdAndDelete(req.params.id);

        res.json({
            message: "Player Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createPlayer,
    getPlayers,
    getPlayerById,
    updatePlayer,
    deletePlayer
};