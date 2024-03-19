import { Schema } from "mongoose";

export const shoppingCardSchema = new Schema({
  orderNumber: {
    type: String,
  },
  productCount: {
    type: Number,
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
