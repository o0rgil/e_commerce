import { Schema } from "mongoose";

export const paymentSchema = new Schema({
  orderNumber: {
    type: String,
  },
  paymentStatus: {
    enum: ["Paid", "not Paid"],
  },
  paymentType: {
    enum: ["Card", "Qpay", "SocialPay"],
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
