const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const mongoose = require("mongoose");

const appointmentSchema = new Schema({
  firstNamePat: {
    type: String,
    required: true,
  },
  lastNamePat: {
    type: String,
    required: true,
  },
  emailPat: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  phone: {
    type: String,
    required: true,
    match: [
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Must use a valid phone number",
    ],
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
