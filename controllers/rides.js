const Ride = require('../models/ride');

module.exports = {
    create,
    index
}

function create(req,res) {
    console.log(req.body, 'submitted contents')
}

async function index() {
    try {
        const ride = await Ride.find({})
        res.status(200).json({ride})
    } catch(err) {
        console.log(err)
    }
}