/** @format */

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/userModel";
dotenv.config();

const jwtPrivateKey = process.env.JWT_SECRET_KEY;

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get users" });
  }
};

// SignUp User post ===================================================
export const singUp = async (req: Request, res: Response) => {
  const {
    userName,
    email,
    password,
    phoneNumber,
    address,
    zipCode,
    cartId,
    createdAt,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      zipCode,
      cartId,
      createdAt,
    });
    console.log(user);
    res.status(201).json({ message: "Success created account" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed to create account" });
  }
};

// SignIn User post ===================================================
export const singIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ message: "Password does not match" });
    }

    const accessToken = jwt.sign({ id: user._id }, jwtPrivateKey as string, {
      expiresIn: "1h",
    });

    const refreshToken = jwt.sign({ id: user._id }, jwtPrivateKey as string, {
      expiresIn: "1d",
    });

    res
      .status(200)
      .cookie("refreshToken", refreshToken)
      .header({ Authorization: accessToken })
      .send(user);
    // res.status(200).json({ message: "Success enter" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed" });
  }
};

// Updating User ===================================================
export const userUpdate = async (req: Request, res: Response) => {
  const {
    userName,
    email,
    password,
    phoneNumber,
    address,
    zipCode,
    cartId,
    createdAt,
    _id,
  } = req.body;
  try {
    const user = await User.findOne({ _id });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    await User.updateOne(
      { _id },
      {
        $set: {
          userName,
          email,
          password,
          phoneNumber,
          address,
          zipCode,
          cartId,
          createdAt,
        },
      }
    );

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update user" });
  }
};

// Deleting User ===================================================
export const userDelete = async (req: Request, res: Response) => {
  const _id = req.params.id;

  try {
    console.log(_id, "productID");
    await User.deleteOne({ _id });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("error in delete user", error);
    return res.status(400).json({ message: "Failed to delete user" });
  }
};
