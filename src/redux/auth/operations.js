import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, goitAPI, setToken } from '../../config/goitAPI';
import toast from 'react-hot-toast';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitAPI.post('users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.error('This email is already registered.', {
        style: { background: '#618264', color: '#f9f7e8' },
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitAPI.post('users/login', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.error('This email is not registered or password is invalid.', {
        style: { background: '#618264', color: '#f9f7e8' },
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await goitAPI.post('/users/logout');
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (savedToken === null) {
      return thunkAPI.rejectWithValue('Token does not exist!');
    }
    try {
      setToken(savedToken);
      const { data } = await goitAPI.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
