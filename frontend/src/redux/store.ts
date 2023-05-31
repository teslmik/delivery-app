import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import shops from './shops/slice';
import products from './products/slice';
import cart from './cart/slice';


const store = configureStore({
  reducer: { shops, products, cart },
});

type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
