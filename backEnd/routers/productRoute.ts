import { Router } from "express";
import upload from "../middleware/multer";
import {
  product,
  productCreate,
  productDelete,
  productUpdate,
} from "../controllers/productConroller";

export const router = Router();

router.route("/product").get(product);
router.route("/productCreate").post(upload.many("image"), productCreate);
router.route("/productUpdate").put(productUpdate);
router.route("/productDelete").delete(productDelete);
