const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");
const auth = require("../middleware/auth");

// Mark attendance
router.post("/mark", auth, async (req, res) => {
  try {
    const attendance = await Attendance.create({
      user: req.user.sub,
      status: req.body.status || "present"
    });
    res.status(201).json({ attendance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get my attendance
router.get("/me", auth, async (req, res) => {
  try {
    const records = await Attendance.find({ user: req.user.sub }).sort({ date: -1 });
    res.json({ attendance: records });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
