/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UserState {
  user: null | any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  token: string | null;
}

const initialState: UserState = {
  user: null,
  status: "idle",
  error: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    logoutUser(state) {
      state.token = null;
    },
  },
});
export const { setUserToken, logoutUser } = userSlice.actions;
export const selectIsLoggedIn = (state: RootState) => !!state.user.token;

export default userSlice.reducer;
