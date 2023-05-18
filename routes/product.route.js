import express from "express";

import { verifyToken } from "../middleware/jwt.js";
import {
    createProduct,
    deleteProduct,
    getProducts,
    updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", verifyToken, getProducts);
router.post("/createProduct", verifyToken, createProduct);
router.put("/updateProduct/:id", verifyToken, updateProduct);
router.delete("/delete/:id", verifyToken, deleteProduct);

export default router;
