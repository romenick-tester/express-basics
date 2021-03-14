const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
    const random = Math.floor(Math.random() * 10000);

    const { name, email, password } = req.body;

    const data = {
        name,
        email,
        password
    }

    fs.appendFileSync(
        `./data/user${random}.json`, JSON.stringify(data));

    res.redirect("/");
});

app.get("/", (req, res) => res.send("data recorded!"));

app.listen(5000, console.log(`Server is running on port 5000.`));