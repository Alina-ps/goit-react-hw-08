import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitAPI } from '../../config/goitAPI';
import toast from 'react-hot-toast';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await goitAPI.get('contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await goitAPI.delete(`contacts/${id}`);
      toast.success('Contact deleted successfully!', {
        style: { background: '#f9ec7e', color: '#e26274' },
      });
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      const { data } = await goitAPI.post('contacts', body);
      toast.success('Congrats. Your contact is added!', {
        style: { background: '#f9ec7e', color: '#e26274' },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, updatedContact }, thunkAPI) => {
    try {
      const { data } = await goitAPI.patch(`contacts/${id}`, updatedContact);
      toast.success('Contact updated successfully!', {
        style: { background: '#f9ec7e', color: '#e26274' },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
