const Coach = require("../models/Coach");

// CREATE COACH
const createCoach = async (req, res) => {
    try {

        const coach = new Coach(req.body);

        await coach.save();

        res.status(201).json(coach);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET ALL COACHES
const getCoaches = async (req, res) => {
    try {

        const coaches = await Coach.find();

        res.json(coaches);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createCoach,
    getCoaches
};