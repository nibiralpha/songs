// import { startLoading } from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import { getArtist, getArtistByID, getArtistTopSongsByID } from "@Api/Artist";
import { setArtist, setArtistDetail, setArtistDetailLoading, setArtistSongs, setArtistSongsLoading, setLoading } from "@/src/redux/ArtistSlice";

const fetchArtist = () => {
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
const fetchArtistByID = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {

      dispatch(setArtistDetailLoading(true));

      const artistRes = await getArtistByID(id);
      const artistData = artistRes?.data?.data;
      
      dispatch(setArtistDetail(artistData));

      dispatch(setArtistDetailLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(setArtistDetailLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

const fetchArtistTracks = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {

      dispatch(setArtistSongsLoading(true));

      const artistTrackRes = await getArtistTopSongsByID(id);
      const artistTrackData = artistTrackRes?.data?.data;      
      
      dispatch(setArtistSongs(artistTrackData));

      dispatch(setArtistSongsLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(setArtistSongsLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

export { fetchArtist, fetchArtistByID, fetchArtistTracks };
