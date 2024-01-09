import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, registerAction } from '../api/auth';
import { toast } from 'react-toastify';

const initialState = {
  user: null,
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state, action) {
      state.isLogged = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log('action fulfilled', action);
      state.user = action.payload;
      state.isLogged = true;
      toast.success('Welcome to OneWeed ❤️', {
        autoClose: 2500,
        position: 'top-right',
        hideProgressBar: true,
      });
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log('Error from there', action);
      toast.error(`${action.error.message}`, {
        autoClose: 3000,
        position: 'bottom-right',
      });
    });

    builder.addCase(registerAction.fulfilled, (state, action) => {
      toast.success('Register success ❤️', {
        autoClose: 2500,
        position: 'top-right',
        hideProgressBar: true,
      });
    });

    builder.addCase(registerAction.rejected, (state, action) => {
      toast.error(`${action.error.message}`, {
        autoClose: 3000,
        position: 'bottom-right',
      });
    });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
