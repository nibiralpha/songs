import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlaylistInterface } from "@app-types/PlaylistState";
import { PlaylistDescription, PlaylistResponse } from "@app-types/Playlist";

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

export const MusicSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setPlaylist1: (state, action: PayloadAction<PlaylistResponse>) => {
      return {
        ...state,
        playlist1: {
          ...state.playlist1,
          // FIX: Extract the internal tracks array from the payload object
          list: action.payload.tracks?.data || [],
          data: action.payload.PlaylistDescription
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

export const { setPlaylist1, setPlaylist1Loading } = MusicSlice.actions;
export default MusicSlice.reducer;
