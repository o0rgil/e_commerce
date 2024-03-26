/** @format */
import Bag from "../models/bagModel";
import Color from "../models/colorModel";
import { Request, Response } from "express";
import cloudinary from "../utils/cloudinary";

export const bagCreate = async (req: Request, res: Response) => {
  const { bagName, price, brand, bagType, colorsNaraa, sale, colors } =
    req.body;
  console.log(req.body);
  try {
    let colorIds = [];
    let newBagId;
    // console.log("Trying to create newBag");
    const newBag = await Bag.create({
      bagName,
      price,
      brand,
      bagType,
      sale,
      // Array руу өнгөнүүдийг хийхэд бэлэн болгоно
      colors: [],
    });
    // newBag-н ID-г нь тусад нь авч байна
    newBagId = newBag._id;
    const colors = colorsNaraa;
    for (const color of colors) {
      let uploadedImages = [];
      const files = req.files as Express.Multer.File[];
      console.log(req.body, req.files);

      uploadedImages = await Promise.all(
        files.map(async (file: { path: string }) => {
          console.log("file paht", file.path);
          const uploadedImage = await cloudinary.uploader.upload(file.path);
          console.log("uploaded", uploadedImage);
          return uploadedImage.secure_url;
        })
      );
      let createColor = await Color.create({
        color: colorsNaraa.color,
        bagId: newBagId,
        bagCode: colorsNaraa.bagCode,
        images: uploadedImages,
      });
      colorIds.push(createColor._id);
    }
    await Bag.findByIdAndUpdate(newBagId, { colors: colorIds });
    res.status(201).send({ message: "Шинэ цүнх амжилттай үүслээ", newBag });
  } catch (error) {
    console.error(error, "Error in catch");
    res.status(500).send({ message: "Шинэ цүнх үүсгэхэд алдаа гарлаа" });
  }
};
