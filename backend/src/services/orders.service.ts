import OrderModel from "../models/order.model";
import { OrderRequestDto } from "../types/types";

class OrdersService {
  async addOrder(payload: OrderRequestDto) {
    return await OrderModel.create(payload);
  }

  async searchOrders({ email, phone }: { email: string, phone: string }) {
    return await OrderModel.find({ email, phone });
  }
}

export const ordersService = new OrdersService();