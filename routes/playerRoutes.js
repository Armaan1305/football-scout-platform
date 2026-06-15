const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

const {
    createPlayer,
    getPlayers,
    getPlayerById,
    updatePlayer,
    deletePlayer
} = require("../controllers/playerController");

router.post("/", authMiddleware, createPlayer);

router.get("/", authMiddleware, getPlayers);

router.get("/:id", authMiddleware, getPlayerById);

router.put("/:id", authMiddleware, updatePlayer);

router.delete("/:id", authMiddleware, deletePlayer);

module.exports = router;    