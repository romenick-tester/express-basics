const express = require("express");
const router = express.Router();

router
    .route("/success")
    .get((req, res) => res.send("<h1>success!</h1>"));

router
    .route("/error")
    .get((req, res) => res.send("<h1>error!</h1>"));

router
    .route("/unauthorized")
    .get((req, res) => res.send("<h1>Not authorized!!</h1>"));

module.exports = router;