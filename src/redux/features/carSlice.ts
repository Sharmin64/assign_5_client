import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";

// Define a type for the slice state
interface CarState {
  value: number;
  name: string;
}

// Define the initial state using that type
const initialState: CarState = {
  value: 0,
  name: "car",
};

export const counterSlice = createSlice({
  name: "car",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default counterSlice.reducer;
