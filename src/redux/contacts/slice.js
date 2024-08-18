import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  deleteContact,
  fetchContacts,
  addContact,
  editContact,
} from './operations';
import { logoutThunk } from '../auth/operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  editing: null,
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    startEditing: (state, action) => {
      state.editing = state.items.find((item) => item.id === action.payload);
    },
    stopEditing: (state) => {
      state.editing = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const updatedContact = action.payload;
        state.items = state.items.map((item) =>
          item.id === updatedContact.id ? updatedContact : item
        );
        state.editing = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const contactsReducer = slice.reducer;
export const { startEditing, stopEditing } = slice.actions;
