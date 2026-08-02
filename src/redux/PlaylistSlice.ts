import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlaylistInterface } from "@app-types/PlaylistState";
import { PlaylistData, PlaylistDescription } from "@app-types/Playlist";

const initialState: PlaylistInterface = {};

// Payload structure for the batch update action
interface BatchPlaylistPayload {
  id: number;
  data: PlaylistData;
}

export const PlaylistSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // Reducer to save all fetched playlists into the state dictionary at once
    setBatchPlaylists: (state, action: PayloadAction<BatchPlaylistPayload[]>) => {
      action.payload.forEach(({ id, data }) => {
        state[id] = {
          list: data.tracks?.data || [],
          data: data.description,
          loading: false, // Turn off loading for this specific playlist
        };
      });
    },
    // Optional: Global loading flag for when you initialize the fetch
    setBatchLoading: (state, action: PayloadAction<{ ids: number[]; loading: boolean }>) => {
      const { ids, loading } = action.payload;
      ids.forEach((id) => {
        if (!state[id]) {
          state[id] = { list: [], data: {} as PlaylistDescription, loading };
        } else {
          state[id].loading = loading;
        }
      });
    },
  },
});

export const { setBatchPlaylists, setBatchLoading } = PlaylistSlice.actions;
export default PlaylistSlice.reducer;
