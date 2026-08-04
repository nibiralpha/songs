import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Artist,
  ArtistDetailResponse,
  ArtistDetails,
  DeezerTrack,
} from "@app-types/Artist";
import {
  ArtistDetailStateInterface,
  ArtistInterface,
} from "@app-types/ArtistState";

const initialState: ArtistInterface = {
  artist: {
    list: [],
    loading: true,
    // error: false,
    // errorResponse: {},
  },
  artistDetails: {
    data: null,
    loading: true,
  },
  artistSongs: {
    data: [],
    loading: true,
  },
};

export const ArtistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    setArtist: (state, action: PayloadAction<Artist[]>) => {
      return {
        ...state,
        artist: { ...state.artist, list: action.payload },
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        artist: { ...state.artist, loading: action.payload },
      };
    },
    setArtistDetail: (state, action: PayloadAction<ArtistDetails>) => {
      return {
        ...state,
        artistDetails: { ...state.artistDetails, data: action.payload },
      };
    },
    setArtistDetailLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        artistDetails: { ...state.artistDetails, loading: action.payload },
      };
    },
    setArtistSongs: (state, action: PayloadAction<DeezerTrack[]>) => {
      return {
        ...state,
        artistSongs: { ...state.artistSongs, data: action.payload },
      };
    },
    setArtistSongsLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        artistSongs: { ...state.artistSongs, loading: action.payload },
      };
    },
  },
});

export const {
  setArtist,
  setLoading,
  setArtistDetail,
  setArtistDetailLoading,
  setArtistSongs,
  setArtistSongsLoading,
} = ArtistSlice.actions;
export default ArtistSlice.reducer;
