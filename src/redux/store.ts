import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reviewsReducer from "../redux/features/reviewsSlice";
import storage from "redux-persist/lib/storage";
import userReducer from "../redux/features/userSlice";
import bookingReducer from "../redux/features/bookingSlice";
import { baseApi } from "./api/baseApi";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "reviews",'booking'],
};

const rootReducer = combineReducers({
  reviews: reviewsReducer,
  user: userReducer,
  booking: bookingReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
