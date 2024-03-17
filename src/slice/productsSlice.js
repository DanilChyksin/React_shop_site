import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { shuffle } from "../utils/common";
import { base_url } from "../utils/constant";

export const fetchProducts = createAsyncThunk(
  "products, fetchProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${base_url}/products`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    sort: [],
    related: [],
  },
  reducers: {
    sortPrice: (state, { payload }) => {
      state.sort = state.list.filter(({ price }) => price < payload);
    },
    getRelatedProducts: (state, { payload }) => {
      const list = state.list.filter(({ category: { id } }) => payload === id);
      state.related = shuffle(list);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.list = payload;
    });
  },
});
export const { sortPrice, getRelatedProducts } = productsSlice.actions;
export default productsSlice.reducer;
