import { NextFunction, Request, Response } from "express";

import { productsService } from '../services/products.service'

class ProductsController {
  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await productsService.getProductByShopId(req.query.id as string);

      return res.json(products);
    } catch (error) {
      next(error);
    }
  }
}

export const productsController = new ProductsController();