import { createSlice } from "@reduxjs/toolkit"
import uniqid from "uniqid";

const initialState = {
    contacts: [],
}

const contactsSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: {
      prepare: (data) => {
        return {
          payload: {
            ...data,
            id: uniqid("contact"),
          },
        };
      },
            reducer: (state, { payload }) => {
          console.log(payload);
        state.contacts.push(payload);
      },
    },
        deleteContact(state, {payload}) {
            state.contacts = state.contacts.filter(contact => contact.id !== payload)
        }
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;
//export const contactsReducer = contactsSlice.reducer