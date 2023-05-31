import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../http';
import { ResponseShopsDto } from '../../types/types';

const fetchShops = createAsyncThunk<ResponseShopsDto[], void, Record<string, string>>(
  'shops/fetchShops',
  async (_, { rejectWithValue }) => {
    try {
      return (await api.get<ResponseShopsDto[]>('/shops')).data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export { fetchShops };
