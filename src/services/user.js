// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://randomuser.me/api/?&seed=c0218a8d4d041ce6",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (ID) => `&results=${10}`,
    }),
    getUserByID: builder.query({
      query: (userId) => `&results=${userId}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useGetUserByIDQuery } = userApi;
