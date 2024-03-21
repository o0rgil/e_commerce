import { Schema, model } from "mongoose";

const productSchema = new Schema({
  productName: {
    type: String,
    required: [true, "Please check name"],
  },
  productNumber: {
    type: String,
    required: [true],
  },
  price: {
    type: Number,
    required: [true, "Please check price"],
  },
  qty: {
    type: Number,
  },
  images: {
    type: [String],
    required: [true, "Please check image"],
  },
  description: {
    type: String,
    required: [true, "Please check description"],
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
