import express from "express";
import { handleUserSignup, handleUserLogin } from "../controller/user.js";

const router = express.Router();

router.post("/", handleUserSignup);
router.post("/login", handleUserLogin);

export default router;
