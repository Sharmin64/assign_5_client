import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Review {
  rating: number;
  feedback: string;
}

export interface ReviewState {
  reviews: Review[];
}

const initialState: ReviewState = {
  reviews: [],
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (state, action: PayloadAction<Review>) => {
      state.reviews.unshift(action.payload);
    },
  },
});

export const { addReview } = reviewsSlice.actions;

export default reviewsSlice.reducer;
