const express = require("express");
const userSignUpController = require("../controller/userSignUp");
const userSignInController = require("../controller/userSignin");
const userDetailsController = require("../controller/userDetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/userLogout");
const allUsers = require("../controller/allUsers");
const updateUser = require("../controller/updateUser");
const router = express.Router();

router.post("/signup", userSignUpController);
router.post("/sigin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/user-logout", userLogout);

//admin route
router.get("/all-users", authToken, allUsers);
router.post("/user-update", authToken, updateUser);

module.exports = router;
