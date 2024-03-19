import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  productName: String,
  description: String,
  productCode: Number,
  img: String,
  mainPrice: Number,
  qty: Number,
  color: String,
  size: String,
  tag: String,
  mainCategory: String,
  category: String,
});

const Order = model("Order", orderSchema);

export default Order;
