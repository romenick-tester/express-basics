const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    generation: {
        type: String,
        required: true,
        default: "first"
    },
    image: {
        type: String,
        required: true,
        default: "n/a"
    },
    images: {
        type: Array
    }
}, { timestamps: true });

const FirstGen = mongoose.model("FirstGen", PokemonSchema);

module.exports = FirstGen;