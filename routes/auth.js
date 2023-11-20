const express = require("express");

const { signIn, signUp, authCheck } = require("../controllers/auth");

const router = express.Router();

router.post("/signUp", signUp);

router.post("/signIn", signIn);

router.get("/check", authCheck);

module.exports = router;
