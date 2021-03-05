const express = require("express");
const { adminLogin, adminSignup, signout } = require("../controller/Auth");
const {  signupValidationRequest,isValidation, loginValidationRequest } = require("../validator/auth");
const router = express.Router();
router.post("/signup",signupValidationRequest,isValidation,adminSignup)
router.post("/login",loginValidationRequest,isValidation,adminLogin)
router.post("/signout",signout)



module.exports = router;