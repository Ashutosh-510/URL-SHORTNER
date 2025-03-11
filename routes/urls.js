import express from "express";
import handleGenerateUrl from "../controller/urls.js";
const router = express.Router();

router.post("/", handleGenerateUrl);

export default router;
