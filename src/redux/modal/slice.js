import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  contactId: null,
  isEditFormOpen: false,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.contactId = action.payload;
      state.isEditFormOpen = false;
    },
    closeModal: () => {
      return initialState;
    },
    openEditForm: (state, action) => {
      state.isOpen = false;
      state.contactId = action.payload;
      state.isEditFormOpen = true;
    },
    closeEditForm: () => {
      return initialState;
    },
  },
});

export const modalReducer = slice.reducer;
export const { openModal, closeModal, openEditForm, closeEditForm } =
  slice.actions;
