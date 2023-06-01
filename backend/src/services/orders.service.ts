import OrderModel from "../models/order.model";
import { OrderRequestDto } from "../types/types";

class OrdersService {
  async addOrder(payload: OrderRequestDto) {
    return await OrderModel.create(payload);
  }
}

export const ordersService = new OrdersService();