import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MusicSlice from "./MusicSlice";
import ArtistSlice from "./ArtistSlice";
import PlaylistSlice from "./PlaylistSlice";
import GenraSlice from "./GenraSlice";
import AlbumSlice from "./AlbumSlice";
import SearchSlice from "./SearchSlice";

const rootReducer = combineReducers({
  songs: MusicSlice,
  artist: ArtistSlice,
  playlist: PlaylistSlice,
  genra: GenraSlice,
  album: AlbumSlice,
  search: SearchSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
