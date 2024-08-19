import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  contactId: null,
  isEditFormOpen: false,
  isAddFormOpen: false,
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
    openAddForm: (state, action) => {
      state.isOpen = false;
      state.contactId = action.payload;
      state.isEditFormOpen = false;
      state.isAddFormOpen = true;
    },
    closeAddForm: () => {
      return initialState;
    },
  },
});

export const modalReducer = slice.reducer;
export const {
  openModal,
  closeModal,
  openEditForm,
  closeEditForm,
  openAddForm,
  closeAddForm,
} = slice.actions;
