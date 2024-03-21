import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDb } from "./config/connectToDB";
import { router } from "./routers/productRoute";
import upload from "./middleware/multer";
import { productCreate } from "./controllers/productConroller";

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
app.post(
  "/productCreate",
  upload.array("image"),
  async (req: Request, res: Response) => {
    productCreate(req, res);
  }
);

module.exports.app;
