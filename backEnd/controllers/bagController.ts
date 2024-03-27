/** @format */
import Bag from "../models/bagModel";
import Color from "../models/colorModel";
import { Request, Response } from "express";
import cloudinary from "../utils/cloudinary";

export const bagCreate = async (req: Request, res: Response) => {
  const { bagName, price, brand, bagType, sale, colors } = req.body;
  // const uploadedImages = req.files;
  // console.log(uploadedImages, "uploadedImages");

  console.log(req.body, "req.body");
  try {
    let colorIds = [];
    let newBagId;

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

    for (const color of colors) {
      const createColor = await Color.create({
        color: color.colorName,
        bagId: newBagId,
        bagCode: color.bagCode,
        images: color.images,
      });
      console.log("createColor", createColor);
      colorIds.push(createColor._id);
    }
    await Bag.findByIdAndUpdate(newBagId, { colors: colorIds });
    res.status(201).send({ message: "Шинэ цүнх амжилттай үүслээ", newBag });
  } catch (error) {
    console.error(error, "Error in catch");
    res.status(500).send({ message: "Шинэ цүнх үүсгэхэд алдаа гарлаа" });
  }
};
