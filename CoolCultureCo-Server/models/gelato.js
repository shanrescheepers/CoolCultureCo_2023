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
    churnCategory: {
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
    }
});

module.exports = mongoose.model('gelato', GelatoSchema);
