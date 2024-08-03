import { Router,Request,Response } from 'express';
import { createProduct, getAllProducts, getProductById } from '../Controller/Product.js';


const router = Router();


router.post('/', createProduct);


router.get('/', getAllProducts);


router.get('/:id', getProductById);

export default router;
