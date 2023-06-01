import { NextFunction, Request, Response } from "express";

import { ordersService } from '../services/orders.service'

class OrdersController {
  async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const neworder = await ordersService.addOrder(req.body);

      return res.json(neworder);
    } catch (error) {
      next(error);
    }
  }
}

export const ordersController = new OrdersController();