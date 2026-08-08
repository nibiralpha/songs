import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlbumDetailsResponse } from "@app-types/Album";
import { AlbumInterface } from "@app-types/AlbumState";

const initialState: AlbumInterface = {
  album: {
    data: null,
    loading: true,
  },
};

export const AlbumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setAlbum: (state, action: PayloadAction<AlbumDetailsResponse>) => {
      return {
        ...state,
        album: { ...state.album, data: action.payload },
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        album: { ...state.album, loading: action.payload },
      };
    },
  },
});

export const { setAlbum, setLoading } = AlbumSlice.actions;
export default AlbumSlice.reducer;
