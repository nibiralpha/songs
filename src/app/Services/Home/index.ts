// import { startLoading } from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import {
  getPopulerSongs,
  getSongsByCategory,
  getSongsByGenra,
} from "@Api/Songs";
import {
  setClassicalSongs,
  setClassicalSongsLoading,
  setLoading,
  setPopSongs,
  setPopulerSongs,
  setTracks,
  setTracksLoading,
} from "@/src/redux/MusicSlice";
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
      if (category === "Pop") {
        dispatch(setLoading(true));
      } else if (category === "Classical") {
        dispatch(setClassicalSongsLoading(true));
      }

      const categoryId = Genres[category];

      const songsRes = await getSongsByCategory(categoryId);
      const songsData = songsRes?.data?.tracks?.data;

      if (category === "Pop") {
        dispatch(setPopSongs(songsData));
        dispatch(setLoading(false));
      } else if (category === "Classical") {
        dispatch(setClassicalSongs(songsData));
        dispatch(setClassicalSongsLoading(false));
      }
    } catch (error) {
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);

      dispatch(setLoading(false));
      throw error;
    }
  };
};

const fetchSongsByGenra = (category: Genre) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setTracksLoading(true));

      const songsRes = await getSongsByGenra(category);
      const songsData = songsRes?.data.data;

      dispatch(setTracks(songsData));

      dispatch(setTracksLoading(false));
    } catch (error) {
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);

      dispatch(setTracksLoading(false));
      throw error;
    }
  };
};
export { fetchPopulerSongs, fetchSongsByCategory, fetchSongsByGenra };
