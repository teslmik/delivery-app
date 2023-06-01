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

  async getOrdersByParams(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, phone } = req.query;
      console.log('req.query: ', req.query);
      if (!email || !phone) {
        throw new Error;
      }
      const orders = await ordersService.searchOrders({ email, phone } as { email: string, phone: string });

      return res.json(orders);
    } catch (error) {
      next(error);
    }
  }
}

export const ordersController = new OrdersController();