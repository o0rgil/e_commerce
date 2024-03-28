/** @format */

import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDb } from "./config/connectToDB";
import { router } from "./routers/productRoute";

// import { productCreate } from "./controllers/productConroller";
import cloudinary from "./utils/cloudinary";
import upload from "./middleware/multer";
import Image from "./models/image";

const app = express();

dotenv.config();
connectToDb();
const PORT = 8080;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);

app.use(
  "/upload",
  upload.single("image"),
  async (req: Request, res: Response) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
      return res.status(400).json({ message: "Зураг оруулна уу" });
    }
    try {
      const newImage = await cloudinary.uploader.upload(uploadedFile.path);
      console.log("newImage", newImage);
      // const image = new Image({ imageUrl: newImage.secure_url });
      // await image.save();
      res.status(201).json({
        message: "Image upload success",
        imageUrl: newImage.secure_url,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Image upload failed" });
    }
  }
);
app.use(router);

app.listen(PORT, () => {
  console.log("application running at: http://localhost:" + PORT);
});
// app.post(
//   "/product",
//   upload.array("image"),
//   async (req: Request, res: Response) => {
//     productCreate(req, res);
//   }
// );

module.exports.app;
