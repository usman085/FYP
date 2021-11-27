const BaseController = require("./base-controller");
const User = require("../models/User");
const Department = require("../models/Department");
const Availability = require("../models/Availability");
const Appointment = require("../models/Appointment");
const mongoose = require("mongoose");

class HomeController extends BaseController {
  constructor() {
    super();
  }
  searchDoctor = async (req, res) => {
    try {
      let { q } = req.query;

      let result = await User.aggregate([
        { $match: { department_id: { $exists: true } } },
        {
          $lookup: {
            from: "departments",
            localField: "department_id",
            foreignField: "_id",
            as: "department",
          },
        },
        { $unwind: "$department" },
        {
          $match: {
            $or: [
              { name: { $regex: q } },
              { "department.name": { $regex: q } },
            ],
          },
        },
      ]);
      res.successResponse({ data: result });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };
  getDoctorTimeSlot = async (req, res) => {
    try {
      let { doctor_id } = req.params;
      let slots = await this.get(Availability, { doctor_id });
      res.successResponse({ data: slots });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };

  getAppointments = async (req, res) => {
    try {
      let { id } = req.params;
      console.log(id);
      let slots = await Appointment.find({
        patient_id: mongoose.Types.ObjectId(id),
      }).populate("doctor_id");
      res.successResponse({ data: slots });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };

  getAppointmentsTow = async (req, res) => {
    try {
      let { id } = req.params;
      console.log(id);
      let slots = await Appointment.find({
        doctor_id: mongoose.Types.ObjectId(id),
      }).populate("patient_id");
      res.successResponse({ data: slots });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };

  allPatient = async (req, res) => {
    try {
      let result = await User.aggregate([
        {
          $lookup: {
            from: "roles",
            localField: "role_id",
            foreignField: "_id",
            as: "roles",
          },
        },
        { $unwind: "$roles" },
        {
          $match: {
            "roles.name": "Patient",
          },
        },
      ]);
      res.successResponse({ data: result });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };
  allDoctors = async (req, res) => {
    try {
      let result = await User.aggregate([
        {
          $lookup: {
            from: "roles",
            localField: "role_id",
            foreignField: "_id",
            as: "roles",
          },
        },
        { $unwind: "$roles" },
        {
          $match: {
            "roles.name": "Doctor",
          },
        },
      ]);
      res.successResponse({ data: result });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };

  createAppointment = async (req, res) => {
    try {
      let appointment = await this.create(Appointment, req.body);
      res.successResponse({ data: appointment });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };

  createSlot = async (req, res) => {
    try {
      let { start_time, end_time, doctor_id } = req.params;
      let slots = await this.create(Availability, {
        start_time,
        end_time,
        doctor_id,
      });
      res.successResponse({ data: slots });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };

  departments = async (req, res) => {
    try {
      let result = await this.get(Department);
      res.successResponse({ data: result });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };
}

module.exports = HomeController;
