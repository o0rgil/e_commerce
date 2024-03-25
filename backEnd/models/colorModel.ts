/** @format */

import { Schema, model } from "mongoose";

// Define the schema for your document
const ColorSchema: Schema = new Schema({
  color: { type: String, required: true },
  bagId: { type: Schema.Types.ObjectId, ref: "Bag", required: true },
  bagCode: { type: String, required: true, unique: true },
  images: { type: [], required: true },
  CreatedAt: { type: Date, default: new Date() },
  UpdatedAt: { type: Date, default: new Date() },
});

const Color = model("Color", ColorSchema);
export default Color;
