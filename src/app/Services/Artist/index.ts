// import { startLoading } from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import {
  getArtist,
  getArtistAlbumByID,
  getArtistByID,
  getArtistTopSongsByID,
  getRelatedArtist,
} from "@Api/Artist";
import {
  setArtist,
  setArtistAlbums,
  setArtistAlbumsLoading,
  setArtistDetail,
  setArtistDetailLoading,
  setArtistSongs,
  setArtistSongsLoading,
  setLoading,
  setRelatedArtist,
  setRelatedArtistLoading,
} from "@/src/redux/ArtistSlice";

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
const fetchArtistAlbums = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setArtistAlbumsLoading(true));

      const artistAlbumRes = await getArtistAlbumByID(id);
      const artistAlbumData = artistAlbumRes?.data?.data;

      dispatch(setArtistAlbums(artistAlbumData));

      dispatch(setArtistAlbumsLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(setArtistAlbumsLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};
const fetchRelatedArtist = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setRelatedArtistLoading(true));

      const relatedArtistRes = await getRelatedArtist(id);
      const relatedartistData = relatedArtistRes?.data;

      dispatch(setRelatedArtist(relatedartistData.data));
      dispatch(setRelatedArtistLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(setRelatedArtistLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

export {
  fetchArtist,
  fetchArtistByID,
  fetchArtistTracks,
  fetchArtistAlbums,
  fetchRelatedArtist,
};
