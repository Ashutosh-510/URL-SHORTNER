import { nanoid } from "nanoid";
import URL from "../models/url.js";

const handleGenerateUrl = async (req, res) => {
  const body = req.body;
  console.log(req.body);
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = nanoid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
    //createdBy: req.user._id,
  });
  //console.log(URL.shortId);

  return res.render("Home", {
    id: shortID,
  });
  return res.json({
    id: shortID,
  });
};

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId: shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

export { handleGenerateUrl, handleGetAnalytics };
