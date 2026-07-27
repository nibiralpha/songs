// import { startLoading } from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import { getPopulerSongs, getTrendingSongs } from "@Api/Songs";
import { setLoading, setPopulerSongs, setTrendingSongs } from "@/src/redux/MusicSlice";

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
      //   dispatch(startLoading(true));

      // dispatch(startLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

const fetchTrendingSongs = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));

      const songsRes = await getTrendingSongs();
      const songsData = songsRes?.data?.tracks?.data;

      dispatch(setTrendingSongs(songsData));

      dispatch(setLoading(false));
    } catch (error: unknown) {
      console.log(error);
      //   dispatch(startLoading(true));

      // dispatch(startLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

export { fetchPopulerSongs, fetchTrendingSongs };
