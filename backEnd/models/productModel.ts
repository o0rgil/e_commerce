import { Double } from "mongodb";
import { Schema, model } from "mongoose";

const productSchema = new Schema({
  productName: String,
});
