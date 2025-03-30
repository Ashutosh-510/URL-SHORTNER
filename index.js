import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./connect.js";
import router from "./routes/urls.js";
import URL from "./models/url.js";
import staticRoute from "./routes/staticRouter.js";
import userRoute from "./routes/user.js";
import { restrictToLoggedinUserOnly, checkAuth } from "./middleware/auth.js";

//express Setup
const app = express();
const PORT = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("db connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//Routes
app.use("/user", userRoute);
app.use("/url", restrictToLoggedinUserOnly, router);
app.use("/", checkAuth, staticRoute);

app.get("/test", async (req, res) => {
  const allUrls = await URL.find({});
  //
  // console.log(allUrls);
  return res.render("Home", {
    urls: allUrls,
    Name: "Ashutosh Singh",
  });
});

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId: shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
