import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrackData } from "@app-types/PopulerSongs";
import { MusicInterface } from "@app-types/MusicState";

const initialState: MusicInterface = {
  populerSongs: {
    list: [],
    loading: true,
    // error: false,
    // errorResponse: {},
  },
  popSongs: {
    list: [],
    loading: true,
    // error: false,
    // errorResponse: {},
  },
};

export const MusicSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setPopulerSongs: (state, action: PayloadAction<TrackData[]>) => {
      return {
        ...state,
        populerSongs: { ...state.populerSongs, list: action.payload },
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        populerSongs: { ...state.populerSongs, loading: action.payload },
      };
    },
    setPopSongs: (state, action: PayloadAction<TrackData[]>) => {
      return {
        ...state,
        popSongs: { ...state.popSongs, list: action.payload },
      };
    },
    setPopSongsLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        popSongs: { ...state.popSongs, loading: action.payload },
      };
    },
  },
});

export const { setPopulerSongs, setPopSongs, setLoading, setPopSongsLoading } = MusicSlice.actions;
export default MusicSlice.reducer;
