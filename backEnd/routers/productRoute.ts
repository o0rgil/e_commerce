/** @format */

import { Router } from "express";
import upload from "../middleware/multer";
import {
  product,
  // productCreate,
  productDelete,
  productUpdate,
  productEdit,
  bagCreate,
} from "../controllers/productConroller";

export const router = Router();

router.route("/bag").get(product);
router.route("/bag_create").post(bagCreate);
// router.route("/productCreate").post(upload.array("image"), productCreate);
router.route("/productUpdate/:id").put(productUpdate);
router.route("/productDelete/:id").delete(productDelete);
// Getting data to edit route=====================================
router.route("/products/:id").get(productEdit);
