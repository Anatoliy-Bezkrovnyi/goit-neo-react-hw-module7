import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66f818df2a683ce9730ea09b.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",  async () => {
    const { data } = await axios.get("/contacts");
    return data;
})