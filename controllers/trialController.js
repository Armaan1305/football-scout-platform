const Trial = require("../models/Trial");

// CREATE
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

// GET ALL
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

// UPDATE
const updateTrial = async (req, res) => {
  try {

    const trial = await Trial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(trial);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// DELETE
const deleteTrial = async (req, res) => {
  try {

    await Trial.findByIdAndDelete(req.params.id);

    res.json({
      message: "Trial Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  createTrial,
  getTrials,
  updateTrial,
  deleteTrial
};
