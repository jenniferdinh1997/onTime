const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    user:
        {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date:
        {type: String},
    pickup:
        {type: String},
    dropoff:
        {type: String}
})

module.exports = mongoose.model('Ride', rideSchema);