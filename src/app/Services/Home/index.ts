// import { startLoading } from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import { getPopulerSongs, getSongsByCategory } from "@Api/Songs";
import { setLoading, setPopSongs, setPopulerSongs } from "@/src/redux/MusicSlice";
import { Genre, Genres } from "@app-types/Genre";

const fetchPopulerSongs = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));

      const songsRes = await getPopulerSongs();
      const songsData = songsRes?.data?.tracks?.data;

      dispatch(setPopulerSongs(songsData));

      dispatch(setLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(setLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

const fetchSongsByCategory = (category: Genre) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));

      const categoryId = Genres[category];

      const songsRes = await getSongsByCategory(categoryId);
      const songsData = songsRes?.data?.tracks?.data;

      dispatch(setPopSongs(songsData));
      dispatch(setLoading(false));
    } catch (error) {
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);

      dispatch(setLoading(false));
      throw error;
    }
  };
};

export { fetchPopulerSongs, fetchSongsByCategory };
