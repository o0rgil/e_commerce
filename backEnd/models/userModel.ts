import { useColorScheme } from "@mui/material";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "Please check name"],
  },
  email: {
    type: String,
    required: [true, "Please check email"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please check phoneNumber"],
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, "Please check password"],
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
  },
  address: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
  cartId: {
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

const User = model("user", userSchema);

export default User;
