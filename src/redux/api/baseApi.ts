// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiBaseURL = "http://localhost:5000/api";
// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseURL }),
  endpoints: (builder) => ({
    // Fetch all services
    fetchServices: builder.query({
      query: (param) => ({
        url: "/services",
        param,
      }),
    }),
    // Fetch service details by ID
    fetchServiceDetails: builder.query({
      query: (id: string) => `/services/${id}`,
    }),

    // Mutation to create a service
    createService: builder.mutation({
      query: (newService) => ({
        url: "/services",
        method: "POST",
        body: newService,
      }),
    }),
    // Mutation to update a service
    updateService: builder.mutation({
      query: ({ id, ...updatedService }) => ({
        url: `/services/${id}`,
        method: "PUT",
        body: updatedService,
      }),
    }),
    // Fetch all bookings
    fetchAllBookings: builder.query({
      query: () => "/bookings",
    }),

    // Mutation to create a booking
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/bookings",
        method: "POST",
        body: bookingData,
      }),
    }),
    // Mutation to update a service
    updateBooking: builder.mutation({
      query: ({ id, ...updatedBooking }) => ({
        url: `/bookings/my-bookings/${id}`,
        method: "PUT",
        body: updatedBooking,
      }),
    }),

    // User signup endpoint
    signupUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/signup",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation<
      { token: string },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useFetchServicesQuery,
  useFetchServiceDetailsQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useSignupUserMutation,
  useLoginUserMutation,
  useFetchAllBookingsQuery,
  useCreateBookingMutation,
  useUpdateBookingMutation,
} = baseApi;
