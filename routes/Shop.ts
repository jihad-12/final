import { Router,Request,Response } from 'express';

import { createShop, getAllShops, getSingleShop } from '../Controller/shop.js';
import { AppError } from '../Errors/Error.js';

const router = Router();

router.post('/', async (req, res, next)=>{
    try {
        if(!req.body.name){
            throw new AppError('Missing values', 400)
        }
        const shop = await createShop(req.body, req.body.hotlineId)
    } catch (error) {
        next(error)
    }

});


router.get('/:id', getSingleShop);


router.get('/', getAllShops); 

export default router;


