// Required modules
const express = require("express");
const mongoose = require("mongoose");
const db = mongoose.connection;
const path = require("path");
const dotenv = require("dotenv").config();
const Level1 = require("./API/level1-coords");
const Level2 = require("./API/level2-coords");
const Level3 = require("./API/level3-coords");
const Score1 = require("./API/level1-score");
const Score2 = require("./API/level2-score");
const Score3 = require("./API/level3-score");
const newScore = require("./API/newScore");

// Express App and PORT
const app = express();
const PORT = process.env.PORT || 3001;

// Setting up connection to DB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("Connected to db");
	app.listen(PORT, () => console.log("Server is running!"));
});

app.use(express.urlencoded({extended: true}));

// Routes
app.use("/API/level1-coords", Level1);
app.use("/API/level1-score", Score1);
app.use("/API/level2-coords", Level2);
app.use("/API/level2-score", Score2);
app.use("/API/level3-coords", Level3);
app.use("/API/level3-score", Score3);
app.use("/API/add-score", newScore);

app.use((req, res) => {
	res.status(404).send("404");
});
