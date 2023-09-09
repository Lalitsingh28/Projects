import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts , fetchProductsByFilter} from "./ProductFetchApi";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchProductsAsync = createAsyncThunk('productList/fetchProducts', async () => {
  const response = await fetchProducts();
  return response.data;
});

export const fetchProductsFilterAsync = createAsyncThunk('productList/fetchProductsByFilter', async (filter) => {
  const response = await fetchProductsByFilter(filter);
  return response.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductsFilterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsFilterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;
