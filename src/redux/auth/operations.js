import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitAPI } from '../../config/goitAPI';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitAPI.post('users/signup', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
