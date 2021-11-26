const express = require("express");
const HomeController = require("../controllers/home-controller");
const router = express.Router();
const homeController = new HomeController();

router.get("/search", homeController.searchDoctor.bind(homeController));

router.get("/doctors", homeController.allDoctors.bind(homeController));

router.get("/departments", homeController.departments.bind(homeController));

router.post("/slot", homeController.createSlot.bind(homeController));

router.post(
  "/appointment",
  homeController.createAppointment.bind(homeController)
);

router.get(
  "/appointment/:id",
  homeController.getAppointments.bind(homeController)
);

router.get(
  "/time-slot/:doctor_id",
  homeController.getDoctorTimeSlot.bind(homeController)
);

module.exports = router;
