const Ride = require('../models/ride');

module.exports = {
    create,
    index
}

async function create(req,res) {
    const ride = await Ride.create({user: req.user, date: req.body.date, pickup: req.body.pickup, dropoff: req.body.dropoff})
    res.status(201).json({ride: ride})
}

async function index() {
    const ride = await Ride.find({}).populate('user').exec()
    res.status(200).json({ride: ride})
}