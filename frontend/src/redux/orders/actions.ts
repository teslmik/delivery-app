import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../http';
import { OrderResponseDto } from '../../types/types';

const fetchSearchOrders = createAsyncThunk<OrderResponseDto[], { email: string, phone: string }>(
  'orders/fetchSearchOrders',
  async ({email, phone}, { rejectWithValue }) => {
    try {
      return (await api.get<OrderResponseDto[]>(`/order?email=${email}&phone=${phone}`)).data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export { fetchSearchOrders };
