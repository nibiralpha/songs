import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Artist,
  ArtistDetailResponse,
  ArtistDetails,
  DeezerTrack,
  RelatedArtistResponse,
} from "@app-types/Artist";
import {
  ArtistDetailStateInterface,
  ArtistInterface,
  RelatedArtistInterface,
} from "@app-types/ArtistState";
import { ArtistAlbum } from "@app-types/Album";

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
  artistAlbum: {
    data: [],
    loading: true,
  },
  relatedArtist: {
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
    setArtistAlbums: (state, action: PayloadAction<ArtistAlbum[]>) => {
      return {
        ...state,
        artistAlbum: { ...state.artistAlbum, data: action.payload },
      };
    },
    setArtistAlbumsLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        artistAlbum: { ...state.artistAlbum, loading: action.payload },
      };
    },
    setRelatedArtist: (state, action: PayloadAction<RelatedArtistResponse[]>) => {
      return {
        ...state,
        relatedArtist: { ...state.relatedArtist, data: action.payload },
      };
    },
    setRelatedArtistLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        relatedArtist: { ...state.relatedArtist, loading: action.payload },
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
  setArtistAlbums,
  setArtistAlbumsLoading,
  setRelatedArtist,
  setRelatedArtistLoading
} = ArtistSlice.actions;
export default ArtistSlice.reducer;
