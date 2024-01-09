import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser, register } from '../../api';

export const fetchUser = createAsyncThunk(
  'authSlice/fetchUser',
  async (userData) => {
    try {
      const res = await getUser(userData);
      return res.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const registerAction = createAsyncThunk(
  'authSlice/register',
  async (userData) => {
    try {
      const res = await register(userData);
      return res.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
