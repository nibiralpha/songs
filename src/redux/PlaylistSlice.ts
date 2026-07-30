import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlaylistInterface } from "@app-types/PlaylistState";
import {
  PlaylistData,
  PlaylistDescription,
  PlaylistResponse,
} from "@app-types/Playlist";

const initialState: PlaylistInterface = {
  playlist1: {
    list: [],
    data: {} as PlaylistDescription,
    loading: true,
    // error: false,
    // errorResponse: {},
  },
  //   popSongs: {
  //     list: [],
  //     loading: true,
  //     // error: false,
  //     // errorResponse: {},
  //   },
};

export const PlaylistSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setPlaylist1: (state, action: PayloadAction<PlaylistData>) => {
      return {
        ...state,
        playlist1: {
          ...state.playlist1,
          list: action.payload.tracks?.data || [],
          data: action.payload.description,
        },
      };
    },
    setPlaylist1Loading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        playlist1: { ...state.playlist1, loading: action.payload },
      };
    },
  },
});

export const { setPlaylist1, setPlaylist1Loading } = PlaylistSlice.actions;
export default PlaylistSlice.reducer;
