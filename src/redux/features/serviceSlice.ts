import { createSlice } from "@reduxjs/toolkit";
import { ServiceState } from "../../types";

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
});

export default serviceSlice.reducer;
