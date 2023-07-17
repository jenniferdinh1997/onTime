const Ride = require('../models/ride');

const create = async (req,res) => {
    try {
        const ride = await Ride.create({
            user: req.user, 
            pickup: req.body.pickup, 
            dropoff: req.body.dropoff
        });
        res.status(201).json({ride: ride})
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ err });
    }
};

const index = async (req,res) => {
    try {
        const ride = await Ride.find().exec();
        res.status(200).json({ ride });
    } catch(err) {
        console.error(err.message);
        res.status(500).json({ err });
    }
};

module.exports = {
    create,
    index
};