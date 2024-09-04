// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiBaseURL = "http://localhost:5000";
// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseURL }),
  endpoints: (builder) => ({
    // User signup endpoint
    signupUser: builder.mutation({
      query: (userData) => ({
        url: "api/auth/signup",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation<
      { token: string },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "api/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignupUserMutation, useLoginUserMutation } = baseApi;
