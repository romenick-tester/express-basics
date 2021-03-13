const express = require("express");
const dotenv = require("dotenv");
const { catchAllRoutes, testRoutes, defaultRoutes } = require("./routes")

const app = express();
dotenv.config();

app.use(express.static(__dirname + "/settings/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/test", testRoutes);

app.use("/default", defaultRoutes);

app.use("*", catchAllRoutes);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is running on port ${port}.`));