// routes/formRoutes.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Define your schemas
const PersonalHealthSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  healthConcerns: { type: String, required: true },
});

const CorporateHealthSchema = new mongoose.Schema({
  organizationName: { type: String, required: true },
  numberOfMembers: { type: Number, required: true },
  programFeatures: { type: String, required: true },
});

// Create models
const PersonalHealth = mongoose.model("PersonalHealth", PersonalHealthSchema);
const CorporateHealth = mongoose.model(
  "CorporateHealth",
  CorporateHealthSchema
);

// Handle Personal Coaching form submission
router.post("/personal", async (req, res) => {
  const { fullName, email, phoneNumber, healthConcerns } = req.body;

  try {
    const newPersonalEntry = new PersonalHealth({
      fullName,
      email,
      phoneNumber,
      healthConcerns,
    });
    await newPersonalEntry.save();
    res
      .status(201)
      .json({ message: "Personal coaching data submitted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error submitting data", error });
  }
});

// Handle Corporate Coaching form submission
router.post("/corporate", async (req, res) => {
  const { organizationName, numberOfMembers, programFeatures } = req.body;

  try {
    const newCorporateEntry = new CorporateHealth({
      organizationName,
      numberOfMembers,
      programFeatures,
    });
    await newCorporateEntry.save();
    res
      .status(201)
      .json({ message: "Corporate coaching data submitted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error submitting data", error });
  }
});

router.get("/submissions", async (req, res) => {
  try {
    const personalSubmissions = await PersonalHealth.find({});
    const corporateSubmissions = await CorporateHealth.find({});

    res.status(200).json({
      personalSubmissions,
      corporateSubmissions,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching submissions", error });
  }
});

module.exports = router;
