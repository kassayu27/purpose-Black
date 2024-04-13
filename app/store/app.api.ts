import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axios-base-query';
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  tagTypes: ['products'],
  endpoints: () => ({}),
});
