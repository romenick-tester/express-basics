const express = require("express");
const router = express.Router();

let errors = [];

router.all("/", (req, res) => {
    errors.push({
        msg: `${req.originalUrl} page does not exist!`,
        time: `${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}`
    });

    setTimeout(() => errors.pop(), 3600000);

    res.status(404).json(errors)
})

module.exports = router;