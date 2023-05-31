import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../http';
import { ResponseProductsDto } from '../../types/types';

const fetchProducts = createAsyncThunk<ResponseProductsDto[], { shopId:string }>(
  'products/fetchProducts',
  async ({ shopId }, { rejectWithValue }) => {
    try {
      return (await api.get<ResponseProductsDto[]>(`/products?id=${shopId}`)).data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export { fetchProducts };
