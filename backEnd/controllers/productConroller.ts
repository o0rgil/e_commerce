import Product from "../models/productModel";
import { Request, Response } from "express";
import cloudinary from "../utils/cloudinary";
import { IReq } from "../types/interface";
import { resolve } from "path";

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
export const productCreate = async (req: IReq, res: Response) => {
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
  const { thumbnail, image } = req.files as {
    [fieldname: string]: Express.Multer.File[];
  };
  try {
    console.log(req.body);

    const uploadedThumbnails = await Promise.all(
      thumbnail.map(async (file) => {
        const uploadedThumbnail = await cloudinary.uploader.upload(file.path);
        console.log("uploadedThumbnail", uploadedThumbnail);
        return uploadedThumbnail.secure_url;
      })
    );

    const uploadedImages = await Promise.all(
      image.map(async (file) => {
        const uploadedImage = await cloudinary.uploader.upload(file.path);
        console.log("uploadedImage", uploadedImage);
        return uploadedImage.secure_url;
      })
    );

    const newProduct = await Product.create({
      productName,
      categoryId,
      price,
      qty,
      thumbnails: uploadedThumbnails,
      images: uploadedImages,
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
