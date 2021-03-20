// Required modules
const express = require("express");
const mongoose = require("mongoose");
const db = mongoose.connection;
const path = require("path");
const dotenv = require("dotenv").config();
const Level1 = require("./API/level1");
const Level2 = require("./API/level2");
const Level3 = require("./API/level3");
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

// Routes
app.use("/API/level1", Level1);
app.use("/API/level2", Level2);
app.use("/API/level3", Level3);
app.use("API/add-score", newScore);

app.use((req, res) => {
	res.status(404).send("404");
});
