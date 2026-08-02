import { Dispatch } from "@reduxjs/toolkit";
import { getPlaylistTracksByID } from "@Api/Playlist";
import { setFresh_pop } from "@/src/redux/PlaylistSlice";
import { PlaylistData } from "@app-types/Playlist";

const fetchPlaylistByID = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      //   dispatch(setLoading(true));

      const playListRes = await getPlaylistTracksByID(id);
      const playlistData = playListRes?.data;

      const { tracks, ...playlistDescription } = playlistData;

      const data: PlaylistData = {
        description: playlistDescription,
        tracks: {
          data: tracks?.data,
        },
      };

      dispatch(setFresh_pop(data));

      //   dispatch(setLoading(false));
    } catch (error: unknown) {
      console.log(error);
      //   dispatch(setLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

export { fetchPlaylistByID };
