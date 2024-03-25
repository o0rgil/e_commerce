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

router.route("/bag").get(product);
router.route("/bagCreate").post(upload.array("image"), bagCreate);
router.route("/productUpdate/:id").put(productUpdate);
router.route("/productDelete/:id").delete(productDelete);
// Getting data to edit route=====================================
router.route("/products/:id").get(productEdit);
