import Product from "../models/productModel";
import { Request, Response } from "express";
import cloudinary from "../utils/cloudinary";

export const product = async (req: Request, res: Response) => {
  try {
    const product = await Product.find({});

    res.status(200).json({ product, message: "Successfully get file" });
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
  // console.log("body", req.body);
  // const { image } = req.files as {
  //   [fieldname: string]: Express.Multer.File[];
  // };
  console.log("files", req.files);
  // console.log("files", req.files[0].image);
  const parsedInput = JSON.parse(req.body.input);

  try {
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

    const newProduct = await Product.create({
      productName: parsedInput.productName,
      productNumber: parsedInput.productNumber,
      price: parsedInput.price,
      qty: parsedInput.qty,
      images: uploadedImages,
      description: parsedInput.description,
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
    productNumber,
    price,
    qty,
    images,
    description,
    viewsCount,
    createdAt,
  } = req.body;

  try {
    await Product.findOneAndUpdate(
      { _id },
      {
        $set: {
          productName,
          productNumber,
          price,
          qty,
          images,
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
  const _id = req.params.id;

  try {
    console.log(_id, "productID");
    await Product.deleteOne({ _id });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("error in delete product", error);
    return res.status(400).json({ message: "Failed to delete product" });
  }
};
