import { Schema, model } from "mongoose";

const productSchema = new Schema({
  productName: {
    type: String,
    required: [true, "Please check name"],
  },
  categoryId: {
    type: String,
    required: [true],
  },
  price: {
    type: String,
    required: [true, "Please check price"],
  },
  qty: {
    type: Number,
  },
  thumbnails: {
    type: String,
  },
  images: {
    type: String,
    required: [true, "Please check image"],
  },
  coupon: {
    String,
  },
  salePercent: {
    type: Number,
  },
  description: {
    type: String,
    required: [true, "Please check description"],
  },
  viewsCount: {
    type: Number,
    required: [true, "Please check viewsCount"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
    required: [true, " Please check createdAt"],
  },
  updatedAt: {
    type: Date,
    default: new Date(),
    required: [true, " Please check createdAt"],
  },
});

const Product = model("Product", productSchema);

export default Product;
