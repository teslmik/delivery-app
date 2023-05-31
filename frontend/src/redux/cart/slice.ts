import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { calcTotalPrice } from '../../helpers/helpers';
import { ResponseProductsDto } from '../../types/types';

type CartSliseType = {
  items: ResponseProductsDto[],
  totalPrice: number,
}

const initialState: CartSliseType = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ResponseProductsDto>) {
      if (!state.items.some(obj => obj._id === action.payload._id)) {
        state.items.push(action.payload);
      } else {
        const findItem = state.items.find(obj => obj._id === action.payload._id);
        findItem && findItem.count++;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    increment(state, action: PayloadAction<string>) {
      const findItem = state.items.find(obj => obj._id === action.payload);
      findItem && findItem.count++;
      state.totalPrice = calcTotalPrice(state.items);
    },
    decrement(state, action: PayloadAction<string>) {
      const findItem = state.items.find(obj => obj._id === action.payload);
      findItem && findItem.count--;
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(obj => obj._id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    }
  },
});

export const { addToCart, increment, decrement, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;