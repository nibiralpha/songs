// import { startLoading } from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import { getPopulerSongs } from "@Api/Songs";
import { setLoading, setPopulerSongs } from "@/src/redux/MusicSlice";

const fetchPopulerSongs = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));

      const songsRes = await getPopulerSongs();
      const songsData = songsRes?.data?.tracks?.data;
      console.log("songs", songsData);

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

export { fetchPopulerSongs };
