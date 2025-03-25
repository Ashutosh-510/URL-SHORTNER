import express from "express";
import { handleGenerateUrl, handleGetAnalytics } from "../controller/urls.js";
const router = express.Router();

router.post("/", handleGenerateUrl);
router.get("/analytics/:shortId", handleGetAnalytics);

export default router;
