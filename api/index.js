import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import express from "express";
import router from "./../src/router.js";

dotenv.config();
const app = express();

function bootstrap() {
  let URI = process.env.databaseUri;
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
}

bootstrap();
//Body parser implement

app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

//Routing Implement
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Success");
});

//Undefined route Implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("App Run at 5000");
});

//mongodb+srv://Book-Landing-page:kawser456@cluster0.arc8uxd.mongodb.net/?retryWrites=true&w=majority

//Book-Landing-page
//kawser456
