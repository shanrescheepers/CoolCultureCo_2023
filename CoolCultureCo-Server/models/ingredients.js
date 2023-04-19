const mongoose = require('mongoose');


const IngredientsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    location: {
        required: true,
        type: String,
    },
    cerealChurn: {
        required: true,
        type: Boolean,
    },
    originalChurn: {
        required: true,
        type: Boolean,
    },
    candyChurn: {
        required: true,
        type: Boolean,
    },
});

module.exports = mongoose.model('ingredients', IngredientsSchema);
