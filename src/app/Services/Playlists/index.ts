// import { startLoading } from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import { getArtist } from "@Api/Artist";
import { setArtist, setLoading } from "@/src/redux/ArtistSlice";

const fetchPlaylistByID = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));

      const artistRes = await getArtist();
      const artistData = artistRes?.data;
      dispatch(setArtist(artistData.data));

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

export { fetchPlaylistByID };
