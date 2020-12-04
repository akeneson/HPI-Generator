const router = require("express").Router(),
  userController = require("../../controllers/userController"),
  auth = require("../../middleware/auth"),
  { User } = require("../../models"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken");

// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
// .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)


// Matches with "/api/users/register"
router.route("/register")
  .post(userController.create);
// router.post("/register", async (req, res) => {
//   try {
//     const { email, password, firstName, lastName, gender, dob, passwordCheck } = req.body;

//     if (!email || !password || !firstName || !lastName || !gender || !dob)
//       return res
//         .status(400)
//         .json({ msg: "Missing required fields" });
//     if (password.length < 4)
//       return res
//         .status(400)
//         .json({ msg: "Password must be at least 4 characters" });
//     if (password !== passwordCheck)
//       return res
//         .status(400)
//         .json({ msg: "Password check does not match" });
//     const existingUser = await User.findOne({ email: email });
//     if (existingUser)
//       return res
//         .status(400)
//         .json({ msg: "Email already in use" });
//     const newUser = new User({ email, password, firstName, lastName, gender, dob });
//     newUser.save(err => {
//       if (err)
//         res.status(500).json({ message: { msgBody: "Error:You are not registered.", msgError: true } });
//       else
//         res.status(201).json({ message: { msgBody: "Account successfully created", msgError: false } });
//     });

//   } catch (err) {
//     res.status(500).json({ error: err.message })
//   }
// })


// Matches with "/api/users/login"
router.route("/login")
  .post(userController.login);
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password)
//       return res
//         .status(400)
//         .json({ msg: "Invalid Username or Password" });

//     const user = await User.findOne({ email: email });
//     if (!user)
//       return res
//         .status(400)
//         .json({ msg: "Email not registered. Please sign up" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res
//         .status(400)
//         .json({ msg: "Incorrect password" });
//     }
//     const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET);
//      console.log(token);
//     res.json({
//       token,
//       user: {
//         id: user.id,
//         email: user.email
//       },
//     })
//   } catch (err) {
//     res.status(500).json({ error: err.message })
//   }
// });



// Matches with "/api/users/login"  
router.route("/validToken")
  .post(userController.validToken);
// router.post("/validToken", async (req, res) => {
  
//   try {
//     const token = req.header('x-auth-token');
//     console.log("token: ",token)
//     if (!token) return res.json(false);

//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("verified: ", verified)
//     if (!verified) return res.json(false);

//     const user = await User.findById(verified.user)
//     console.log("user: ", user)
//     if (!user) return res.json(false);


//     return res.json(true)
//   } catch (err) {
//     res.status(500).json({ error: err.message })
//   }
// })



// Matches with "/api/users/delete"
// router.delete('/delete', auth, async (req, res) => {
//   console.log("req: ",req)
//     try {
//       const deletedUser = await User.findByIdAndDelete(req.user);
//       res.json(deletedUser)
//     } catch (err) {
//       res.status(500).json({ error: err.message })
//     }
//   })

module.exports = router;
