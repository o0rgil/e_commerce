import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDb } from "../backEnd/connectToDB";
import { router } from "./routers/productRoute";

const app = express();

dotenv.config();
connectToDb();
const PORT = 8080;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(router);

app.listen(PORT, () => {
  console.log("application running at: http://localhost:" + PORT);
});
