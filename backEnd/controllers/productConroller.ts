import Product from "../models/productModel";
import { Request, Response } from "express";
import cloudinary from "../utils/cloudinary";

export const product = async (req: Request, res: Response) => {
  try {
    const product = await Product.find({});
    res.status(200).json({ message: "Successfully get file" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed" });
  }
};

// Creating Products ===================================================
export const productCreate = async (req: Request, res: Response) => {
  const {
    productName,
    categoryId,
    price,
    qty,
    coupon,
    salePercent,
    description,
    viewsCount,
    createdAt,
  } = req.body;
  const { thumbnail, image } = req.file;
  try {
    console.log(req.body);
    const newImage = await cloudinary.uploader.upload(image.path);
    const newThumbnail = await cloudinary.uploader.upload(thumbnail.path);
    console.log("newImage", newImage);
    console.log("newThumbnail", newThumbnail);

    const newProduct = await Product.create({
      productName,
      categoryId,
      price,
      qty,
      thumbnails: newThumbnail.secure_url,
      images: newImage.secure_url,
      coupon,
      salePercent,
      description,
      viewsCount,
      createdAt,
    });
    console.log("Successfully created", newProduct);
    return res.status(201).json({ message: "Created", product: newProduct });
  } catch (error) {
    console.error("error in create product", error);
    return res.status(400).json({ message: "Failed to create product" });
  }
};

// Updating Products ===================================================
export const productUpdate = async (req: Request, res: Response) => {
  const {
    _id,
    productName,
    categoryId,
    price,
    qty,
    thumbnails,
    images,
    coupon,
    salePercent,
    description,
    viewsCount,
    createdAt,
  } = req.body;

  try {
    await Product.updateOne(
      { _id },
      {
        $set: {
          productName,
          categoryId,
          price,
          qty,
          thumbnails,
          images,
          coupon,
          salePercent,
          description,
          viewsCount,
          createdAt,
        },
      }
    );

    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.error("error in create product", error);
    return res.status(400).json({ message: "Failed to update product" });
  }
};

// Deleting Products ===================================================
export const productDelete = async (req: Request, res: Response) => {
  const { _id } = req.body;
  try {
    await Product.deleteOne({ _id });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("error in delete product", error);
    return res.status(400).json({ message: "Failed to delete product" });
  }
};
