import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MusicSlice from "./MusicSlice";

const rootReducer = combineReducers({
  songs: MusicSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
