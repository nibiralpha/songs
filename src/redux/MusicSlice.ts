import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchTrack, TrackData } from "@app-types/PopulerSongs";
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
  classicalSongs: {
    list: [],
    loading: true,
    // error: false,
    // errorResponse: {},
  },
  tracks: {
    list: [],
    loading: true,
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
    setClassicalSongs: (state, action: PayloadAction<TrackData[]>) => {
      return {
        ...state,
        classicalSongs: { ...state.classicalSongs, list: action.payload },
      };
    },
    setClassicalSongsLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        classicalSongs: { ...state.classicalSongs, loading: action.payload },
      };
    },
    setTracks: (state, action: PayloadAction<SearchTrack[]>) => {
      return {
        ...state,
        tracks: { ...state.tracks, list: action.payload },
      };
    },
    setTracksLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        tracks: { ...state.tracks, loading: action.payload },
      };
    },
  },
});

export const {
  setPopulerSongs,
  setPopSongs,
  setLoading,
  setPopSongsLoading,
  setClassicalSongs,
  setClassicalSongsLoading,
  setTracks,
  setTracksLoading,
} = MusicSlice.actions;
export default MusicSlice.reducer;
