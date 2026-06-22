const express = require("express");

const router = express.Router();

const {
  createTrial,
  getTrials,
  updateTrial,
  deleteTrial
} = require("../controllers/trialController");

router.post("/", createTrial);

router.get("/", getTrials);

router.put("/:id", updateTrial);

router.delete("/:id", deleteTrial);

module.exports = router;
