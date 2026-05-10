import dotenv from "dotenv";
import express from "express";
import connectDB from "./db.js";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();
console.log(process.env.MONGODB_URI);

app.listen(process.env.PORT || 4000, () => {
  console.log("서버 실행 중!");
});
