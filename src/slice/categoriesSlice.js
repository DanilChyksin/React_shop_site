import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../utils/constant";

export const fetchCategories = createAsyncThunk(
  "categories, fetchCategories",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${base_url}/categories`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.list = payload;
    });
  },
});
export default categoriesSlice.reducer;
