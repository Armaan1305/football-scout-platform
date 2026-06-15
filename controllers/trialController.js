const Trial = require("../models/Trial");

// CREATE TRIAL
const createTrial = async (req, res) => {
    try {

        const trial = new Trial(req.body);

        await trial.save();

        res.status(201).json(trial);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// GET ALL TRIALS
const getTrials = async (req, res) => {
    try {

        const trials = await Trial.find();

        res.json(trials);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createTrial,
    getTrials
};