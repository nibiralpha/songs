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
  trendingSongs: {
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
    setTrendingSongs: (state, action: PayloadAction<TrackData[]>) => {
      return {
        ...state,
        trendingSongs: { ...state.trendingSongs, list: action.payload },
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        populerSongs: { ...state.populerSongs, loading: action.payload },
      };
    },
  },
});

export const { setPopulerSongs, setTrendingSongs, setLoading } = MusicSlice.actions;
export default MusicSlice.reducer;
