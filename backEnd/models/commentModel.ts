import { Schema } from "mongoose";

export const commentSchema = new Schema({
  reviewId: {
    type: String,
  },
  userId: {
    type: String,
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
