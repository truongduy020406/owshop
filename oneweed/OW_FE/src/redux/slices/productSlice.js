import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from '../api/product';

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {} = productSlice.actions;

export default productSlice.reducer;
