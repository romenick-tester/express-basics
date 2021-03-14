const express = require("express");
const router = express.Router();
const { Pokemon1stGen } = require("../settings");

router
    .route("/")
    .get(async (req, res) => {
        try {
            const pokemon = await Pokemon1stGen.find({});

            res.json({ pokemon, counts: pokemon.length });
        } catch (error) {
            console.error(error.message);
            res.status(500).redirect("/error?msg=Server%20Error");
        }
    })
    .post(async (req, res) => {
        try {
            const { name, type } = req.body;

            const pokemon = new Pokemon1stGen({
                name,
                type,
            });

            const isExist = await Pokemon1stGen.findOne({ name: pokemon.name });

            if (isExist) {
                return res.status(400).redirect("/error?msg=pokemon%20already%20exist!");
            }

            const newPokemon = await pokemon.save();

            res.status(201).redirect("/api/pokemon");
        } catch (error) {
            console.error(error.message);
            res.status(500).redirect("/error?msg=Server%20Error");
        }
    });

router.get("/record", async (req, res) => {
    const { name, type } = req.query;

    if (!name && !type) {
        return res.status(400).redirect("/error?msg=query%20error");
    }

    try {
        const pokemon = new Pokemon1stGen({
            name,
            type,
        })

        const isExist = await Pokemon1stGen.findOne({ name: pokemon.name });

        if (isExist) {
            return res.status(400).redirect("/error?msg=Pokemon%20already%20exist!")
        }

        await pokemon.save();

        res.status(201).redirect("/api/pokemon");
    } catch (error) {
        console.error(error.message);
        res.status(500).redirect("/error?msg=Server%20Error");
    }
})

module.exports = router;