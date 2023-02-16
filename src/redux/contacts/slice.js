import { createSlice } from '@reduxjs/toolkit';
//import { logOut } from 'redux/auth/operation';
import { fetchContacts, addContact, deleteContact } from './operation';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const handlePending = () => {};
const handleRejected = () => {};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  //extraReducers: builder =>
  //  builder
  //    .addCase(
  //      fetchContacts.pending,
  //      (state, action) => (state.isLoading = true)
  //    )
  //    .addCase(fetchContacts.fulfilled, (state, action) => {
  //      state.items = action.payload;
  //      state.isLoading = false;
  //      state.error = null;
  //    })
  //    .addCase(fetchContacts.rejected, (state, action) => {
  //      state.isLoading = false;
  //      state.error = action.payload;
  //    })

  //    .addCase(addContact.pending, (state, action) => {
  //      state.isLoading = true;
  //    })

  //    .addCase(addContact.fulfilled, (state, action) => {
  //      state.isLoading = false;
  //      state.error = null;
  //      state.items.push(action.payload);
  //    })
  //    .addCase(addContact.rejected, (state, action) => {
  //      state.isLoading = false;
  //      state.error = action.payload;
  //    })
  //    .addCase(deleteContact.pending, (state, action) => {
  //      state.isLoading = true;
  //    })
  //    .addCase(deleteContact.fulfilled, (state, action) => {
  //      state.isLoading = false;
  //      state.error = null;
  //      const index = state.items.findIndex(
  //        contact => contact.id === action.payload.id
  //      );
  //      state.items.splice(index, 1);
  //    })
  //    .addCase(deleteContact.rejected, (state, action) => {
  //      state.isLoading = false;
  //      state.error = action.payload;
  //    })
  //    .addCase(logOut.fulfilled, state => {
  //      state.items = [];
  //      state.isLoading = false;
  //      state.error = null;
  //    }),

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handleRejected,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
