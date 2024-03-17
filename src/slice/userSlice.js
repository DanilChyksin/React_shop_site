import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url, signUp } from "../utils/constant";

export const createUser = createAsyncThunk(
  "user/createuser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${base_url}/users/`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const authUser = createAsyncThunk(
  "user/authuser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${base_url}/auth/login`, payload);
      const login = await axios(`${base_url}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${res.data.access_token}`,
        },
      });
      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const updateUser = createAsyncThunk(
  "user/updateuser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.put(`${base_url}/users/${payload.id}`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    cart: [],
    close: false,
    currentAuth: signUp,
  },
  reducers: {
    changeClose: (state, { payload }) => {
      state.close = payload;
    },
    changeCurrentAuth: (state, { payload }) => {
      state.currentAuth = payload;
    },
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const isFound = state.cart.find(({ id }) => id === payload.id);
      if (isFound) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });
      state.cart = newCart;
    },
    removeItemToCart: (state, { payload }) => {
      state.cart = state.cart.filter(({ id }) => id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(authUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});
export const {
  changeClose,
  changeCurrentAuth,
  addItemToCart,
  removeItemToCart,
} = userSlice.actions;
export default userSlice.reducer;
