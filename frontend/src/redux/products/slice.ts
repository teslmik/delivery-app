import { createSlice } from '@reduxjs/toolkit';

import { Status } from '../../enums/enums';
import { ResponseProductsDto } from '../../types/types';
import { fetchProducts } from './actions';

type initialStateType = {
  products: ResponseProductsDto[];
  status: Status;
}

const initialState: initialStateType = {
  products: [],
  status: Status.IDLE,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.products = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.products = [];
    });
  },
});

export default productsSlice.reducer;

