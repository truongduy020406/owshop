import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (state, action) => {
      // Assuming action.payload is an object representing a product
      state.products.push(action.payload);
    },
    // Add more reducers for removing items, updating quantities, etc., if needed
  },
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;
