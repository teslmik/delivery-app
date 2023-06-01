import api from "../http";
import { OrderRequestDto } from "../types/order-request-dto.type";

const fetchCreateOrder = async (payload: OrderRequestDto) => {
  await api.post('/order', payload);
  return 
}

export { fetchCreateOrder };
