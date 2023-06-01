import { ResponseProductsDto } from "./types";

type OrderRequestDto = {
  address: string;
  email: string;
  name: string;
  phone: string;
  products:ResponseProductsDto[];
  totalPrice: number;
}

export { type OrderRequestDto };
