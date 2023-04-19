const mongoose = require('mongoose');
const GelatoSchema = mongoose.Schema({

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
    ingredients: {
        type: Array,
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

module.exports = mongoose.model('gelato', GelatoSchema);
