const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    phone_number: String,
    time_slot_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Availability",
      default: null,
    },
    disease: String,
    doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    patient_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = appointment;
