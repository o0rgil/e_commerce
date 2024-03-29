/** @format */

import { Router } from "express";
import upload from "../middleware/multer";
import {
  product,
  // productCreate,
  productDelete,
  productUpdate,
  productEdit,
} from "../controllers/productConroller";
import { bagCreate } from "../controllers/bagController";

export const router = Router();
// Creating bag ===================
router.route("/bagCreate").post(bagCreate);
// Getting created bags ==========
router.route("/bag").get(product);
// Deleting bags =================================
router.route("/productDelete/:id").delete(productDelete);
// Getting data to edit route =====================================
router.route("/products/:id").get(productEdit);
router.route("/productUpdate/:id").put(productUpdate);
