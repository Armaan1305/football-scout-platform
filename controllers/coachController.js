const Coach = require("../models/Coach");

// CREATE
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

// GET ALL
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

// UPDATE
const updateCoach = async (req, res) => {
  try {

    const coach = await Coach.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(coach);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// DELETE
const deleteCoach = async (req, res) => {
  try {

    await Coach.findByIdAndDelete(req.params.id);

    res.json({
      message: "Coach Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  createCoach,
  getCoaches,
  updateCoach,
  deleteCoach
};
