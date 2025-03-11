import express from "express";

import connectToMongoDB from "./connect.js";
import router from "./routes/urls.js";

const app = express();
const PORT = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("db connected")
);

app.use("/url", router);

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
