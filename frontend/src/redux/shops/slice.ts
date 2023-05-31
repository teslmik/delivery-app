import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../../enums/enums';
import { ResponseShopsDto } from '../../types/types';
import { fetchShops } from './actions';

type initialStateType = {
  shops: ResponseShopsDto[];
  status: Status;
}

const initialState: initialStateType = {
  shops: [],
  status: Status.IDLE,
};

export const shopsSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShops.pending, (state) => {
      state.status = Status.LOADING;
      state.shops = [];
    });
    builder.addCase(fetchShops.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.shops = action.payload;
    });
    builder.addCase(fetchShops.rejected, (state) => {
      state.status = Status.ERROR;
      state.shops = [];
    });
  },
});

export default shopsSlice.reducer;

