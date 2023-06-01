import { createSlice } from '@reduxjs/toolkit';

import { Status } from '../../enums/enums';
import { OrderResponseDto } from '../../types/types';
import { fetchSearchOrders } from './actions';

type initialStateType = {
  orders: OrderResponseDto[];
  status: Status;
}

const initialState: initialStateType = {
  orders: [],
  status: Status.IDLE,
};

export const productsSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchOrders.pending, (state) => {
      state.status = Status.LOADING;
      state.orders = [];
    });
    builder.addCase(fetchSearchOrders.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.orders = action.payload;
    });
    builder.addCase(fetchSearchOrders.rejected, (state) => {
      state.status = Status.ERROR;
      state.orders = [];
    });
  },
});

export default productsSlice.reducer;

