const express = require("express");
require("dotenv").config();
const { connectDB } = require("./settings");
const pokemonRoutes = require("./routes/pokemonRoutes");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("<h4>Server is up and running...</h4>"))

app.use("/api/pokemon", pokemonRoutes);

app.get("/error", (req, res) => {
    const { msg } = req.query;

    res.status(400).json({ msg });
});

app.get("*", (req, res) => {
    res.status(404).json({ msg: `${req.originalUrl} Page Not Found` })
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is running on port ${port}.`));