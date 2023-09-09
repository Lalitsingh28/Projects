import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/productList/ProductListSlice'

const store = configureStore({
  reducer: {
    product: productReducer,
  },
})

export default store;