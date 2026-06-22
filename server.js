require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const coachRoutes = require("./routes/coachRoutes");
const playerRoutes = require("./routes/playerRoutes");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const trialRoutes = require("./routes/trialRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Football Scouting Platform Backend Running");
});

app.get("/health", (req, res) => {
    res.json({
        status: "OK"
    });
});

app.use("/auth", authRoutes);
app.use("/players", playerRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/coaches", coachRoutes);
app.use("/trials", trialRoutes);
app.use("/ai", aiRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "Route Not Found"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});