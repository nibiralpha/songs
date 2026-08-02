import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlaylistInterface } from "@app-types/PlaylistState";
import {
  PlaylistData,
  PlaylistDescription,
  PlaylistResponse,
} from "@app-types/Playlist";

const initialState: PlaylistInterface = {
  Fresh_pop: {
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
    setFresh_pop: (state, action: PayloadAction<PlaylistData>) => {
      return {
        ...state,
        Fresh_pop: {
          ...state.Fresh_pop,
          list: action.payload.tracks?.data || [],
          data: action.payload.description,
        },
      };
    },
    setFresh_popLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        Fresh_pop: { ...state.Fresh_pop, loading: action.payload },
      };
    },
  },
});

export const { setFresh_pop, setFresh_popLoading } = PlaylistSlice.actions;
export default PlaylistSlice.reducer;
