import { NextFunction, Request, Response } from "express";

import { shopsService } from '../services/shops.service'

class ShopsController {
  async getShops(req: Request, res: Response, next: NextFunction) {
    try {
      const shops = await shopsService.getAllShops();

      return res.json(shops);
    } catch (error) {
      next(error);
    }
  }
}

export const shopsController = new ShopsController();
