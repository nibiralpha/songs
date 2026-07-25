import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TracksResponse } from "@app-types/PopulerSongs";
// import { MoviesInterface } from "@app-types/MovieState";

// const initialState: MoviesInterface = {
const initialState = {
  populerSongs: {
    list: [],
    loading: true,
    // error: false,
    // errorResponse: {},
  },
};

export const MusicSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setPopulerSongs: (state, action: PayloadAction<TracksResponse>) => {
      return { ...state, populerSongs: action.payload.tracks };
    },
  },
});

export const { setPopulerSongs } = MusicSlice.actions;
export default MusicSlice.reducer;
