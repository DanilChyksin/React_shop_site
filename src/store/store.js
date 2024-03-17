import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../slice/apiSlice";
import categoriesSlice from "../slice/categoriesSlice";
import productsSlice from "../slice/productsSlice";
import userSlice from "../slice/userSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
