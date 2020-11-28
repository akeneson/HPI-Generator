const router = require("express").Router();
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

// router.get("/test", (req,res)=> {
//   res.send("hello: User test route working")
// })

module.exports = router;
