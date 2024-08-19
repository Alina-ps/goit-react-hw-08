import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  registerThunk,
  loginThunk,
  logoutThunk,
  refreshUserThunk,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUserThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.rejected, loginThunk.rejected),
        (state, action) => {
          state.error = action.payload;
        }
      );
  },
});

export const authReducer = slice.reducer;
