
import { Router,Request,Response } from 'express';
import { createCategory, getAllCategories } from '../Controller/Category.js';

const router = Router();

router.post('/', createCategory);
router.get('/', getAllCategories);

export default router;

