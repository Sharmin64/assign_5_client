import { createSlice } from "@reduxjs/toolkit";
import { IService } from "../../types";
import { baseApi } from "../api/baseApi";

interface ServiceState {
  services: IService[];
  serviceDetails: IService | null;
  loading: boolean;
  error: string | null;
}

const initialState: ServiceState = {
  services: [],
  serviceDetails: null,
  loading: false,
  error: null,
};

const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(baseApi.endpoints.fetchServices.matchPending, (state) => {
        state.loading = true;
      })
      .addMatcher(
        baseApi.endpoints.fetchServices.matchFulfilled,
        (state, action) => {
          state.loading = false;
          state.services = action.payload;
        }
      )
      .addMatcher(
        baseApi.endpoints.fetchServices.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Could not fetch services";
        }
      )
      .addMatcher(
        baseApi.endpoints.fetchServiceDetails.matchPending,
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        baseApi.endpoints.fetchServiceDetails.matchFulfilled,
        (state, action) => {
          state.loading = false;
          state.serviceDetails = action.payload;
        }
      )
      .addMatcher(
        baseApi.endpoints.fetchServiceDetails.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error =
            action.error.message || "Could not fetch service details";
        }
      );
  },
});

export default serviceSlice.reducer;
