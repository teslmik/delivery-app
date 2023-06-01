import { Router } from 'express';
import { ordersController } from '../controllers/orders.controller';

import { productsController } from '../controllers/products.controller';
import { shopsController } from '../controllers/shops.controller';

const router = Router();

router.get('/shops', shopsController.getShops);
router.get('/products', productsController.getProducts);
router.get('/order', ordersController.getOrdersByParams);
router.post('/order', ordersController.createOrder);

export default router;