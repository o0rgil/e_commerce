import { Schema, model } from "mongoose";

// Define the schema for your document
const ColorSchema: Schema = new Schema({
  color: { type: String, required: true },
  images: { type: [], required: true },
  CreatedAt: { type: Date, default: new Date() },
});

const Color = model("Color", ColorSchema);
export default Color;
