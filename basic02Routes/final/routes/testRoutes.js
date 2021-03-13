const express = require("express");
const router = express.Router();
const { authorize } = require("../settings/middlewares");

router
    .route("/login")
    .post((req, res) => {
        const { name } = req.body;

        if (!name) {
            return res.status(400).redirect("/default/error");
        }

        res.redirect(`/api/test/${name}`);
    })

router
    .route("/:name")
    .get(authorize, (req, res) => {

        if (!req.user || req.user.id !== "123456") {

            res.redirect("/default/unauthorized");

        } else {

            res.redirect("/default/success");
            
        }
    })

module.exports = router;