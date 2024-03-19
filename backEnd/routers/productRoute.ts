import { Router } from "express";
import { product, productCreate } from "../controllers/productConroller";
export const router = Router();

router.route("/product").get(product);
router.route("/productCreate").post(productCreate);
