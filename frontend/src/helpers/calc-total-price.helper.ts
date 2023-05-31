import { CartItemType } from "../types/types";

const calcTotalPrice = (items: CartItemType[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
}

export { calcTotalPrice };
