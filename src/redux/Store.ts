import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MusicSlice from "./MusicSlice";
import ArtistSlice from "./ArtistSlice";
import PlaylistSlice from "./PlaylistSlice";

const rootReducer = combineReducers({
  songs: MusicSlice,
  artist: ArtistSlice,
  playlist: PlaylistSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
