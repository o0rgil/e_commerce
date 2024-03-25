/** @format */

import { Schema, model } from "mongoose";

// Define the schema for your document
const BagSchema: Schema = new Schema({
  bagName: { type: String, required: true },
  colors: [{ type: Schema.Types.ObjectId, ref: "Color", required: true }],
  price: { type: Number, required: true },
  brand: {
    type: String,
    required: true,
    enum: ["Prada", "LV", "Gucci", "Hermes"],
  },
  bagType: {
    type: String,
    required: true,
    enum: ["Hand bag", "Accessory bag", "Travel bag", "Back pack"],
  },
  bagCode: { type: String, required: true, unique: true },
  sale: { type: Number },
  CreatedAt: { type: Date, default: new Date() },
  UpdatedAt: { type: Date, default: new Date() },
});

const Bag = model("Bag", BagSchema);
export default Bag;
