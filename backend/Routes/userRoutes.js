const express = require("express");
const { registerUser, loginUser, getUserProfile, logoutUser } = require("../Controllers/userController");
const router = express.Router();
const authMiddleware = require("../Middlewares/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getUserProfile);
router.get("/logout", authMiddleware,  logoutUser);

module.exports = router;
