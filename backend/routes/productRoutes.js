import { Router } from "express";
import { addProduct, productList, removeProduct, singleProduct, updateProduct } from "../controllers/productController.js";
import upload from "../middlewares/multerMiddleware.js";
import { authenticateUser, authorizePermissions } from "../middlewares/authMiddleware.js";
const router = Router();

router.post('/add',authenticateUser,authorizePermissions("admin"),upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);
router.delete("/remove/:id",authenticateUser,authorizePermissions("admin"),removeProduct)
router.put("/update/:id", authenticateUser, authorizePermissions("admin"), upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),updateProduct);
router.get('/single-product/:id',singleProduct)
router.get('/product-list',productList)

export default router;