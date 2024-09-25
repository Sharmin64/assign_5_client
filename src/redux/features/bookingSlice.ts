/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingState } from "../../types";
import { RootState } from "../store";

const initialState: BookingState = {
  serviceId: null,
  slotId: null,
  vehicleDetails: null,
  status: "idle",
  error: null,
  bookings: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingDetails(state, action: PayloadAction<Partial<BookingState>>) {
      state.serviceId = action.payload.serviceId || state.serviceId;
      state.slotId = action.payload.slotId || state.slotId;
      state.vehicleDetails =
        action.payload.vehicleDetails || state.vehicleDetails;
    },
    setBookingStatus(state, action: PayloadAction<BookingState["status"]>) {
      state.status = action.payload;
    },
    setBookingError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    addBooking(state, action: PayloadAction<any>) {
      // Add new booking to the bookings array
      state.bookings.push(action.payload);
    },
  },
});

// Selectors to get upcoming and past bookings based on the current date
export const selectUpcomingBookings = (state: RootState) =>
  state.booking.bookings.filter(
    (booking) => new Date(booking.timeSlot).getTime() > Date.now()
  );

export const selectPastBookings = (state: RootState) =>
  state.booking.bookings.filter(
    (booking) => new Date(booking.timeSlot).getTime() <= Date.now()
  );

export const {
  setBookingDetails,
  setBookingStatus,
  setBookingError,
  addBooking,
} = bookingSlice.actions;
export default bookingSlice.reducer;
