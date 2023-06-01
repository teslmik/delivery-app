import { ResponseProductsDto } from "./types";

type OrderResponseDto = {
  _id: string
  address: string;
  email: string;
  name: string;
  phone: string;
  products:ResponseProductsDto[];
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}

export { type OrderResponseDto };
