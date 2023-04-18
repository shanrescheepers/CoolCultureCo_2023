const mongoose = require('mongoose');
const LocationsSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    managerNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('locations', LocationsSchema);
