import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserProfile, UserState } from "../../types";

const initialState: UserState = {
  profile: null, // Profile will be null initially
  status: "idle",
  error: null,
  token: null, // Token will also be null initially
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Set user token during login
    setUserToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    // Logout user and clear token and profile
    logoutUser(state) {
      state.token = null;
      state.profile = null;
    },
    // Update user profile
    updateProfile(state, action: PayloadAction<UserProfile>) {
      state.profile = { ...state.profile, ...action.payload };
    },
  },
});

export const { setUserToken, logoutUser, updateProfile } = userSlice.actions;

// Selector to check if the user is logged in
export const selectIsLoggedIn = (state: RootState) => !state.user.token;

// Selector to get the user profile
export const selectUserProfile = (state: RootState) => state.user.profile;

export default userSlice.reducer;
