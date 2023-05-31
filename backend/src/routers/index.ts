import { Router } from 'express';

import { productsController } from '../controllers/products.controller';
import { shopsController } from '../controllers/shops.controller';
// import { body } from 'express-validator';

// import { userController } from '../controllers/user.controller.js';
// import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/shops', shopsController.getShops);
router.get('/products', productsController.getProducts);
router.get('/order');
router.post('/order');

// router.post(
//   '/registration',
//   body('email').isEmail(),
//   body('password').isLength({ min: 5, max: 32 }),
// userController.registration);
// router.post('/login', userController.login);
// router.post('/logout', userController.logout);
// router.get('/activate/:link', userController.activate);
// router.get('/refresh', userController.refresh);
// router.get('/users', authMiddleware, userController.getUsers);

export default router;