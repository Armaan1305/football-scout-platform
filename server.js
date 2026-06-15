require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const coachRoutes = require("./routes/coachRoutes");
const playerRoutes = require("./routes/playerRoutes");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const trialRoutes = require("./routes/trialRoutes");
const aiRoutes = require("./routes/aiRoutes");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/footballDB")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Football Scouting Platform Backend Running");
});

app.use("/auth", authRoutes);

app.use("/players", playerRoutes);

app.use("/dashboard", dashboardRoutes);

app.use("/coaches", coachRoutes);

app.use("/trials", trialRoutes);

app.use("/ai", aiRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});