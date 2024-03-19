import Product from "../models/productModel";
import { Request, Response } from "express";

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
    thumbnails,
    images,
    coupon,
    salePercent,
    description,
    viewsCount,
    createdAt,
  } = req.body;
  try {
    console.log(req.body);

    const newProduct = await Product.create({
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
    });
    console.log("Successfully created", newProduct);
    return res.status(201).json({ message: "Created", product: newProduct });
  } catch (error) {
    console.error("error in create product", error);
    return res.status(400).json({ message: "Failed to create product" });
  }
};

// Updating Products ===================================================
export const updateProduct = async (req: Request, res: Response) => {};
