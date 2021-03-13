const express = require("express");
require("dotenv").config();
const people = require("./people");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const data = [...people];

app.get("/", (req, res) => res.send("<p>Server is up and running.</p>"))

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    res.redirect(`/success/${email}/${password}`);
});

app.get("/success/:email/:password", (req, res) => {
    const { email, password } = req.params;

    const user = data.find((item) => item.email === email);

    if (!user) {
        return res.status(401).redirect("/error/Invalid%20Credentials!");
    }

    if (user.password !== password) {
        return res.status(401).redirect("/error/Invalid%20Credentials!");
    }

    res.send(`<h1> Welcome ${user.name.split(" ")[0]}!</h1>`);
})

app.get("/error/:msg", (req, res) => {
    const { msg } = req.params;

    res.send(`<h1> ${msg} </h1>`);
})

app.all("*", (req, res) => {
    res.status(404).send(`<h1><i>${req.originalUrl}</i> page does not exist!</h1>`)
});

let port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is running on port ${port}.`))