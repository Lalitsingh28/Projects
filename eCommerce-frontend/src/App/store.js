import { configureStore, createReducer } from '@reduxjs/toolkit';
import productReducer from '../features/product/ProductListSlice';
import authReducer from '../features/authentication/AuthSlice';
import cartReducer from '../features/cart/cartSlice';
import orderReducer from '../features/order/orderSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer
  },
});

export default store;
