const router = require("express").Router();
const recordController = require("../../controllers/recordController");

// Matches with "/api/illnessRecords"
router.route("/")
  .get(recordController.findAll)
  .post(recordController.create);

// Matches with "/api/illnessRecords/:id"
router
  .route("/:id")
  .get(recordController.findById)
  .put(recordController.update)
  .delete(recordController.remove);

const userController = require("../../controllers/userController");

// Matches with "/api/illnessRecords"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/illnessRecords/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
