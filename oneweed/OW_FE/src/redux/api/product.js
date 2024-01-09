import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProduct } from '../../api';

export const fetchProduct = createAsyncThunk(
  'productSlice/fetchProduct',
  async () => {
    try {
      const res = await getAllProduct();
      return res.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
