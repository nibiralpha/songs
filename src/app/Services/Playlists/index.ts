import { Dispatch } from "@reduxjs/toolkit";
import { getPlaylistTracksByID } from "@Api/Playlist";
import { setBatchPlaylists } from "@/src/redux/PlaylistSlice";
// import { PlaylistData } from "@app-types/Playlist";

const fetchPlaylistByID = (ids: number[]) => {
  return async (dispatch: Dispatch) => {
    try {
      const responses = await Promise.all(
        ids.map(async (id) => {
          const playListRes = await getPlaylistTracksByID(id);
          const playlistData = playListRes?.data;

          const { tracks, ...playlistDescription } = playlistData;

          return {
            id,
            data: {
              description: playlistDescription,
              tracks: {
                data: tracks?.data || [],
              },
            },
          };
        }),
      );

      dispatch(setBatchPlaylists(responses));
    } catch (error: unknown) {
      console.error("Error fetching batch playlists:", error);
      throw error;
    }
  };
};
export { fetchPlaylistByID };
