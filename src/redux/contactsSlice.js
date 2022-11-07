import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = { array: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.array.push(action.payload);
    },
    removeContact(state, action) {
      const index = state.array.findIndex(
        contact => contact.id === action.payload
      );
      state.array.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;