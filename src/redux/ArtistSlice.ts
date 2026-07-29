import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Artist } from "@app-types/Artist";
import { ArtistInterface } from "@app-types/ArtistState";

const initialState: ArtistInterface = {
  artist: {
    list: [],
    loading: true,
    // error: false,
    // errorResponse: {},
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
  },
});

export const { setArtist, setLoading } = ArtistSlice.actions;
export default ArtistSlice.reducer;
