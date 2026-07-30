import { Dispatch } from "@reduxjs/toolkit";
import { getPlaylistTracksByID } from "@Api/Playlist";
import { setPlaylist1 } from "@/src/redux/PlaylistSlice";
import { PlaylistData } from "../../Types/Playlist";

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
          data: tracks.data,
        },
      };

      dispatch(setPlaylist1(data));

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
