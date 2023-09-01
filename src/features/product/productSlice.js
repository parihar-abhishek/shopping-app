import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts,fetchProductsByFilters } from "./productAPI";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    console.log(response)
   

    return response.data;
    
  }
);




export const fetchProductsByFiltersAsync = createAsyncThunk(
  "product/fetchProductsByFilters",
  async (filter) => {
    const response = await fetchProductsByFilters(filter);
    console.log(response)
   

    return response.data;
    
  }
);

export const ProductSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllProductsAsync.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        
          state.status = "idle";
          state.products = action.payload;
        })


        .addCase(fetchProductsByFiltersAsync.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        
          state.status = "idle";
          state.products = action.payload;
        });
    },
 
});

export const { increment } = ProductSlice.actions;

export const selectAllproducts = (state) => state.product.products;

export default ProductSlice.reducer;
