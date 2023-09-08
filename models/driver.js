const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  dob: { 
    type: Date ,
    required: true
  },
  email: { 
    type: String, 
    required: true, 
    lowercase: true, 
    unique: true 
  },
  phone: { 
    type: Number 
  },
  language: { 
    type: String,
    default: "English"
  },
  accessibility: { 
    type: Boolean 
  },
  password: { 
    type: String,
    required: true
  },
  // photoUrl: { 
  //   type: String 
  // },
  date: {
    type: Date,
    default: Date.now()
  },
  role: {
    default: "driver"
  }
});

module.exports = mongoose.model("Driver", driverSchema);