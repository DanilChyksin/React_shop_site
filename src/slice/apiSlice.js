import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { buildUrl } from "../utils/common";
import { base_url } from "../utils/constant";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ id }) => `/products/${id}`,
      providesTags: ["Product"],
    }),
    getProducts: builder.query({
      query: (params) => buildUrl("/products", params),
      providesTags: ["Products"],
    }),
  }),
});
export const { useGetProductQuery, useGetProductsQuery } = apiSlice;
