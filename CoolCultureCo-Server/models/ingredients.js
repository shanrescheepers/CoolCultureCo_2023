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
    }
});

module.exports = mongoose.model('ingredients', IngredientsSchema);
