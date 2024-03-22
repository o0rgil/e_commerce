import { Schema, model } from "mongoose";

// Define the schema for your document
const BagSchema: Schema = new Schema({
  bagName: { type: String },
  price: { type: Number, required: true },
  brand: {
    type: String,
    required: true,
    enum: ["Hermes", "LOUIS VUTTON", "Burberry", "Dior"],
  },
  bagType: {
    type: String,
    required: true,
    enum: ["Hand bag", "Accessory bag", "Travel bag", "Back pack"],
  },
  bagColor: [{ type: Schema.Types.ObjectId, ref: "Color", required: true }],
  bagCode: { type: String, required: true, unique: true },
  coupon: { type: String },
  sale: { type: Number },
  CreatedAt: { type: Date, default: new Date() },
});

const Bag = model("Bag", BagSchema);
export default Bag;
