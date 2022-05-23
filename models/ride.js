const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    date:
        {type: Date},
    pickup:
        {type: String},
    dropoff:
        {type: String}
})

module.exports = mongoose.model('Ride', rideSchema);