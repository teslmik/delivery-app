import { ProductResponseDto } from "./types";

type OrderRequestDto = {
  address: string;
  email: string;
  name: string;
  phone: string;
  products: ProductResponseDto[];
  totalPrice: number;
}

export { OrderRequestDto };
