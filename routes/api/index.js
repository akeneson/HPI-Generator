const router = require("express").Router();
const patientRecordsRoutes = require("./patientRecordsAPI");

// Book routes
router.use("/patientrecords", patientRecordsRoutes);

module.exports = router;
