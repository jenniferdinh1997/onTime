const Ride = require('../models/ride');

module.exports = {
    create,
    index
}

function create(req,res) {
    console.log(req.body, req.user, 'body and user')
    try {
        const ride = Ride.create({date: req.body.date, pickup: req.body.pickup, dropoff: req.body.dropoff, user: req.body.user})
        console.log(ride, 'ride')
        res.status(201).json({ride: ride})
    } catch(err) {
        console.log(err)
        res.json({data: err})
    }
}

async function index() {
    try {
        const ride = await Ride.find({})
        res.status(200).json({ride})
    } catch(err) {
        console.log(err)
    }
}