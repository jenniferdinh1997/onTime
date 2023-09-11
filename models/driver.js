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
    default: "English",
    enum: ["English", "Spanish", "Mandarin", "French", "Vietnamese", "Other"]
  },
  carMake: {
    type: String
  },
  carModel: {
    type: String
  },
  carYear: {
    type: Number
  },
  carColor: {
    type: String
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
    type: String,
    default: "driver"
  }
});

module.exports = mongoose.model("Driver", driverSchema);