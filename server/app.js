// Required modules
const express = require("express");
const mongoose = require("mongoose");
const db = mongoose.connection;
const dotenv = require("dotenv").config();
const coords = require("./routes/coords");
const score = require("./routes/score");
const cors = require("cors");

// Express App and PORT
const app = express();
const PORT = process.env.PORT || 3001;

// Setting up connection to DB using Mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("Connected to db");
	app.listen(PORT, () => console.log("Server is running"));
});

// Allowing the client to connect to the API
app.use(
	cors({
		origin: process.env.ORIGIN_CLIENT,
	})
);

app.use(express.urlencoded({extended: true}));

// Routes
app.use("/", coords);
app.use("/", score);

app.use((req, res) => {
	res.status(404).send("404");
});
