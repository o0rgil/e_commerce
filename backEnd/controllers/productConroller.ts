import Bag from "../models/bagModel";
import Color from "../models/colorModel";
import { Request, Response } from "express";
import cloudinary from "../utils/cloudinary";

export const product = async (req: Request, res: Response) => {
  try {
    const bag = await Bag.find({});
    const bagColor = await Color.find({});
    res.status(200).json({ bag, bagColor, message: "Successfully get file" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed" });
  }
};

// Creating Products ===================================================

export const productCreate = async (req: Request, res: Response) => {

  const parsedInput = req.body;
console.log("parsedInput", parsedInput)

  try {
    const { bagName, bagCode, price, brand, bagType, colors } = req.body.input;
    // const colors = req.body.colors;
    // console.log(colors, "colors");
    // console.log("Bag");
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

    // Creating colors and storing IDs ===
    const colorPromises = colors.map(async (color: any) => {
      const newColor = await Color.create({
        color: color.name,
        images: color.images,
      });
      return newColor._id;
    });
    const colorIds = await Promise.all(colorPromises);

    // Creating new bag ===
    const newBag = await Bag.create({
      bagName: bagName,
      bagCode: bagCode,
      price: price,
      brand: brand,
      bagType: bagType,
      bagColor: colorIds, //
    });

    console.log("Successfully created");
    return res.status(201).json({ message: "Created", newBag });
  } catch (error) {
    console.error("error in create bag", error);
    return res.status(400).json({ message: "Failed to create bag" });
  }
};

// Updating Products ===================================================
export const productUpdate = async (req: Request, res: Response) => {
  const _id = req.params.id;
  const parsedInput = JSON.parse(req.body);

  try {
    const existingProduct = await Bag.findById(_id);
    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    let uploadedImages = [];
    const files = req.files as Express.Multer.File[];
    uploadedImages = await Promise.all(
      files.map(async (file: { path: string }) => {
        console.log("file paht", file.path);
        const uploadedImage = await cloudinary.uploader.upload(file.path);
        console.log("uploaded", uploadedImage);
        return uploadedImage.secure_url;
      })
    );
    const updatedBag = await Bag.findByIdAndUpdate(_id, {
      bagName: parsedInput.bagName,
      bagCode: parsedInput.bagCode,
      price: parsedInput.price,
      brand: parsedInput.brand,
      bagType: parsedInput.bagType,
      coupon: parsedInput.coupon,
      sale: parsedInput.sale,
    });
    const updatedColor = await Color.findByIdAndUpdate(_id, {
      bagName: parsedInput.bagName,
      color: parsedInput.color,
      images: uploadedImages,
      bagCode: parsedInput.bagCode,
    });

    res
      .status(200)
      .send({ message: "Bag updated successfully", updatedBag, updatedColor });
  } catch (error) {
    console.error("error in create product", error);
    return res.status(500).send({ message: "Failed to update product" });
  }
};

// Deleting Products ===================================================
export const productDelete = async (req: Request, res: Response) => {
  const _id = req.params.id;

  try {
    console.log(_id, "productID");
    await Bag.deleteOne({ _id });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("error in delete product", error);
    return res.status(400).json({ message: "Failed to delete product" });
  }
};

// Getting one product to edit =========================================
export const productEdit = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    console.log(_id, "productId");
    const product = await Bag.findOne({ _id });
    console.log(product, "Product");
    res
      .status(200)
      .json({ message: "Succesfully fetch product data", product });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Getting problem to send product data" });
  }
};
