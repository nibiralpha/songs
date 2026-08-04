import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Artist, ArtistDetailResponse, ArtistDetails } from "@app-types/Artist";
import { ArtistDetailStateInterface, ArtistInterface } from "@app-types/ArtistState";

const initialState: ArtistInterface = {
  artist: {
    list: [],
    loading: true,
    // error: false,
    // errorResponse: {},
  },
  artistDetails: {
    data: null,
    loading: true
  } 
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
  },
});

export const { setArtist, setLoading, setArtistDetail, setArtistDetailLoading } = ArtistSlice.actions;
export default ArtistSlice.reducer;
