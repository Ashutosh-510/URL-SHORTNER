import express from "express";
import handleuserSignup from "../controller/user.js";
const router = express.Router();

router.post("/", handleuserSignup);
router.post("/login", handleUserLogin);

export default router;
